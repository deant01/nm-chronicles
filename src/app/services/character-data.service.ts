import { inject, Injectable } from '@angular/core';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../config';

export interface CharacterImageSet {
  src: string;
  alt: string;
}

export interface CharacterImages {
  sheet: CharacterImageSet;
  portrait: CharacterImageSet;
  item: CharacterImageSet;
  turnaround: CharacterImageSet;
}

export interface CharacterDTO {
  slug: string;
  name: string;
  tagline: string;
  quote: string;
  race: string;
  role: string;
  age: string;
  appearance: {
    hair: string;
    eyes: string;
  };
  abilities: string[];
  affiliations: string[];
  traits: string[];
  bio: string;
  images: CharacterImages;
  wikiUrl: string;
  revealOnHover?: boolean;
}

const CHARACTER_DATA_FILE = 'assets/data/characters.json';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  private readonly characterDataUrl = buildAssetUrl(this.envConfig.assetBasePath, CHARACTER_DATA_FILE);
  private cache: CharacterDTO[] | null = null;

  async getCharacters(): Promise<CharacterDTO[] | []> {
    if (this.cache) {
      return this.cache;
    }

    const response = await fetch(this.characterDataUrl);
    if (!response.ok) {
      throw new Error(`Failed to load character data: ${response.statusText}`);
    }

    this.cache = await response.json();
    return this.cache ?? [];
  }

  async getCharacter(slug: string): Promise<CharacterDTO | null> {
    const characters = await this.getCharacters();
    return characters.find((character) => character.slug === slug) ?? null;
  }
}
