import { Component, inject } from '@angular/core';
import { Contacts } from '../../layout/shared-components/contacts/contacts';
import { LightHouseService } from '../../layout/shared-components/light-house/light-house.service';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../../config';

@Component({
  selector: 'app-city',
  imports: [Contacts],
  templateUrl: './city.html',
  styleUrls: ['./city.scss'],
})
export class City {
  private readonly lightHouseService = inject(LightHouseService);
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  assetUrl = (path: string) => buildAssetUrl(this.envConfig.assetBasePath, path);

  openLightbox(src: string, alt = ''): void {
    this.lightHouseService.show(src, alt);
  }
}
