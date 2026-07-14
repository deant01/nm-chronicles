import { Component, inject } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../../../config';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class About {
  private contentService = inject(ContentService);

  content = this.contentService.getHomeContent().about;
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  assetUrl = (path: string) => buildAssetUrl(this.envConfig.assetBasePath, path);
}
