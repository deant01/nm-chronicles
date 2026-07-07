import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterDataService, CharacterDTO } from '../../../services/character-data.service';
import { ContentService } from '../../../services/content.service';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../../../config';

@Component({
  selector: 'app-characters',
  imports: [RouterLink],
  templateUrl: './characters.html',
  styleUrls: ['./characters.scss'],
})
export class Characters {
  private characterDataService = inject(CharacterDataService);
  private contentService = inject(ContentService);
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);

  content = this.contentService.getHomeContent().characters;
  characters = signal<CharacterDTO[]>([]);
  assetUrl = (path: string) => buildAssetUrl(this.envConfig.assetBasePath, path);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor() {
    this.loadCharacters();
  }

  private async loadCharacters(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);

    try {
      const value = await this.characterDataService.getCharacters();
      this.characters.set(value);
    } catch {
      this.error.set(this.content.errorMessage);
    } finally {
      this.loading.set(false);
    }
  }
}
