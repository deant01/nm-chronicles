import { Component, inject } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../../../config';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-author',
  imports: [ScrollRevealDirective],
  templateUrl: './author.html',
  styleUrls: ['./author.scss'],
})
export class Author {
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  private contentService = inject(ContentService);

  content = this.contentService.getHomeContent().author;
  authorImageSrc = buildAssetUrl(this.envConfig.assetBasePath, 'assets/images/architect.webp');
}
