import { Component, inject } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-quotations',
  imports: [ScrollRevealDirective],
  templateUrl: './quotations.html',
  styleUrls: ['./quotations.scss'],
})
export class Quotations {
  private contentService = inject(ContentService);

  content = this.contentService.getHomeContent().quotations;
}
