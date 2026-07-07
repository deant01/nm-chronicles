import { Component, inject } from '@angular/core';
import { Contacts } from '../../layout/shared-components/contacts/contacts';
import { LightHouse } from "../../layout/shared-components/light-house/light-house";
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../../config';

@Component({
  selector: 'app-city',
  imports: [Contacts, LightHouse],
  templateUrl: './city.html',
  styleUrls: ['./city.scss'],
})
export class City {
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  assetUrl = (path: string) => buildAssetUrl(this.envConfig.assetBasePath, path);
}
