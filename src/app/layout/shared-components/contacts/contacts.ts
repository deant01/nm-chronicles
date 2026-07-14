import { Component, inject } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contacts',
  imports: [ScrollRevealDirective],
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.scss'],
})
export class Contacts {
  private contentService = inject(ContentService);

  content = this.contentService.getHomeContent().contacts;
}
