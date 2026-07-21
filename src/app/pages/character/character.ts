import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CharacterDataService, CharacterDTO } from '../../services/character-data.service';
import { Contacts } from '../../layout/shared-components/contacts/contacts';
import { Loader } from '../../layout/shared-components/loader/loader';
import { LoaderService } from '../../services/loader.service';
import { LightHouseService } from '../../layout/shared-components/light-house/light-house.service';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../../config';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ContentService } from '../../services/content.service';
import { ShareOn } from '../../layout/shared-components/share-on/share-on';

@Component({
  selector: 'app-character',
  imports: [Contacts, Loader, ScrollRevealDirective, RouterLink, ShareOn],
  templateUrl: './character.html',
  styleUrls: ['./character.scss'],
})
export class Character {
  private readonly lightHouseService = inject(LightHouseService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private characterDataService = inject(CharacterDataService);
  private readonly loaderService = inject(LoaderService);
  readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  private readonly contentService = inject(ContentService);
  assetUrl = (path: string) => buildAssetUrl(this.envConfig.assetBasePath, path);
  template = this.contentService.getTemplateContent().characterPage;
  character = signal<CharacterDTO | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  readonly shareUrl = computed(
    () =>
      typeof window !== 'undefined'
        ? window.location.href
        : this.envConfig.canonicalUrl
  );
  characterName = computed(() => this.character()?.name ?? '');
  characterTagline = computed(() => this.character()?.tagline ?? '');
  characterQuote = computed(() => this.character()?.quote ?? '');

  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  constructor() {
    this.loadCharacter();
  }

  openLightbox(src: string, alt = '', description = ''): void {
    console.log(`Character: openLightbox() called `);
    this.lightHouseService.show(src, alt, description);
  }

  navigateHome(event: MouseEvent, section: string): void {
    event.preventDefault();
    this.router.navigate([''], { state: { homeSection: section } });
  }

  private async loadCharacter(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    this.loaderService.show('Loading character details…');

    const routeCharacter = this.route.snapshot.data['character'] as CharacterDTO | null | undefined;
    if (routeCharacter !== undefined) {
      if (routeCharacter) {
        this.character.set(routeCharacter);
        this.setCharacterMeta(routeCharacter);
      } else {
        this.error.set('Character not found.');
      }
      this.loading.set(false);
      this.loaderService.hide();
      return;
    }

    const state = this.router.getCurrentNavigation()?.extras.state as { character?: CharacterDTO } | undefined;
    if (state?.character) {
      this.character.set(state.character);
      this.setCharacterMeta(state.character);
      this.loading.set(false);
      this.loaderService.hide();
      return;
    }

    const slug = this.route.snapshot.paramMap.get('id');
    if (!slug) {
      this.error.set('Character not found.');
      this.loading.set(false);
      return;
    }

    try {
      const character = await this.characterDataService.getCharacter(slug);
      if (!character) {
        this.error.set('Character not found.');
      } else {
        this.character.set(character);
        this.setCharacterMeta(character);
      }
    } catch {
      this.error.set('Unable to load character details.');
    } finally {
      this.loading.set(false);
      this.loaderService.hide();
    }
  }

  private setCharacterMeta(character: CharacterDTO): void {
    const title = `${character.name} | Newport Maeve Chronicles`;
    const description = character.tagline || character.quote || 'Explore the characters of the Newport Maeve Chronicles.';
    const image = this.assetUrl(character.images.portrait.src || 'assets/images/cover.webp');
    const url = `${this.envConfig.canonicalUrl}character/${character.slug}`;

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });
  }
}
