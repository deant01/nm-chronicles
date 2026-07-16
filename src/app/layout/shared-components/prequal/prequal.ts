import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentService } from '../../../services/content.service';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../../../config';

@Component({
  selector: 'app-prequal',
  imports: [ScrollRevealDirective],
  templateUrl: './prequal.html',
  styleUrls: ['./prequal.scss'],
})
export class Prequal {
  private contentService = inject(ContentService);
  private sanitizer = inject(DomSanitizer);

  content = this.contentService.getHomeContent().prequal;
  isPlayerReady = signal(false);
  iframeSrc = signal<SafeResourceUrl | null>(null);
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  assetUrl = (path: string) => buildAssetUrl(this.envConfig.assetBasePath, path);
  
  loadPlayer(): void {
    if (!this.isPlayerReady()) {
      this.iframeSrc.set(this.sanitizer.bypassSecurityTrustResourceUrl(this.content.iframeSrc));
      this.isPlayerReady.set(true);
    }
  }
}
