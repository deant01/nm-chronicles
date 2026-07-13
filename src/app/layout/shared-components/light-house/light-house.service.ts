import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LightHouseService {
  private readonly document = inject(DOCUMENT);

  readonly isOpen = signal(false);
  readonly src = signal('');
  readonly alt = signal('');

  show(src: string, alt = ''): void {
    this.src.set(src);
    this.alt.set(alt);
    this.isOpen.set(true);
    if (this.document?.body) {
      this.document.body.style.overflow = 'hidden';
    }
    console.log(`LightHouseService: show() called`);
  }

  hide(): void {
    this.isOpen.set(false);
    if (this.document?.body) {
      this.document.body.style.overflow = '';
    }
    console.log(`LightHouseService: hide() called`);
  }
}
