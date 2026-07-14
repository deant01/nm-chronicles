import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentService } from '../../../services/content.service';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

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
  iframeSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.content.iframeSrc);
}
