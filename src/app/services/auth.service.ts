import { Injectable, signal } from '@angular/core';
import { isValidAdminCredentials } from './admin-auth.config';

const STORAGE_KEY = 'nm-chronicles-admin-auth';

interface StoredAdminAuth {
  username: string;
  authHeader: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly username = signal<string | null>(null);
  readonly authHeader = signal<string | null>(null);

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored) as StoredAdminAuth;
      if (parsed?.username && parsed?.authHeader) {
        this.username.set(parsed.username);
        this.authHeader.set(parsed.authHeader);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  login(username: string, password: string): boolean {
    if (!isValidAdminCredentials(username, password)) {
      return false;
    }

    const authHeader = `Basic ${window.btoa(`${username}:${password}`)}`;
    this.username.set(username);
    this.authHeader.set(authHeader);
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ username, authHeader }),
    );
    return true;
  }

  logout(): void {
    this.username.set(null);
    this.authHeader.set(null);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  isAuthenticated(): boolean {
    return !!this.authHeader();
  }

  getAuthorizationHeader(): string | undefined {
    return this.authHeader() ?? undefined;
  }
}
