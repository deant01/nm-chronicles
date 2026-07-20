import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  readonly username = signal('');
  readonly password = signal('');
  readonly error = signal<string | null>(null);
  readonly loading = signal(false);

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (!this.username().trim() || !this.password().trim()) {
      this.error.set('Enter both username and password.');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    if (!this.authService.login(this.username().trim(), this.password().trim())) {
      this.error.set('Invalid username or password.');
      this.loading.set(false);
      return;
    }

    await this.router.navigate(['/admin']);
  }
}
