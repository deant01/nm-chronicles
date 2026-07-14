import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ContentService } from '../../../services/content.service';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../../../config';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-city',
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './city.html',
  styleUrls: ['./city.scss'],
})
export class City {
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  private contentService = inject(ContentService);

  content = this.contentService.getHomeContent().city;
  assetUrl = (path: string) => buildAssetUrl(this.envConfig.assetBasePath, path);
}
