import { Component, inject } from '@angular/core';
import { CookieConsentService } from '../../../services/cookie-consent.service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.html',
  styleUrls: ['./cookie-consent.scss'],
})
export class CookieConsent {
  private readonly consentService = inject(CookieConsentService);

  readonly hasDecision = this.consentService.hasDecision;

  accept(): void {
    this.consentService.accept();
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }

  decline(): void {
    this.consentService.decline();
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }
}
