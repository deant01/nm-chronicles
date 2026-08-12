import { AfterViewInit, Component, computed, inject, OnDestroy, signal, Signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Contacts } from '../../layout/shared-components/contacts/contacts';import { SectionNavigation } from '../../layout/shared-components/section-navigation/section-navigation';import { ShareOn } from '../../layout/shared-components/share-on/share-on';
import { APP_ENVIRONMENT_CONFIG } from '../../config';
import { ContentService } from '../../services/content.service';
import { ScrollService } from '../../services/scroll.service';
import prequalContent from '../../../../assets/data/prequal-content.json';

interface PrequalPart {
  id: string;
  title: string;
  synopsis: string;
  text: string[];
}

interface PrequalContent {
  title: string;
  description: string;
  parts: PrequalPart[];
}

@Component({
  selector: 'app-prequal-page',
  imports: [Contacts, SectionNavigation, ShareOn],
  templateUrl: './prequal.html',
  styleUrls: ['./prequal.scss'],
})
export class PrequalPage implements AfterViewInit, OnDestroy {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly contentService = inject(ContentService);
  private readonly scrollService = inject(ScrollService);
  readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);
  private activeSectionRaf = 0;
  private scrollListener?: () => void;

  readonly content = this.contentService.getHomeContent().prequal;
  readonly story = prequalContent as PrequalContent;
  readonly sectionEntries = this.story.parts.map(part => ({ id: part.id, label: part.title }));
  readonly activeSection: WritableSignal<string | null> = signal(null);
  readonly shareUrl = computed(
    () =>
      typeof window !== 'undefined'
        ? window.location.href
        : this.envConfig.canonicalUrl + 'prequal'
  );

  readonly pageTitle = `${this.story.title} | Newport Maeve Chronicles`;
  readonly pageDescription = this.story.description;

  constructor() {
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.pageDescription });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.pageDescription });
    this.metaService.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: this.pageDescription });
  }

  ngAfterViewInit(): void {
    this.initializeActiveSectionFromHash();
    this.addScrollListener();
  }

  ngOnDestroy(): void {
    if (this.activeSectionRaf) {
      window.cancelAnimationFrame(this.activeSectionRaf);
    }
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  scrollTo(id: string): void {
    this.activeSection.set(id);
    this.scrollService.scrollTo(id);
  }

  private addScrollListener(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.scrollListener = () => {
      if (this.activeSectionRaf) {
        window.cancelAnimationFrame(this.activeSectionRaf);
      }

      this.activeSectionRaf = window.requestAnimationFrame(() => {
        const offsets = this.story.parts
          .map(part => ({
            id: part.id,
            element: document.getElementById(part.id),
          }))
          .filter(item => item.element)
          .map(item => ({
            id: item.id,
            top: item.element!.getBoundingClientRect().top,
          }))
          .filter(item => item.top <= window.innerHeight * 0.4)
          .sort((a, b) => b.top - a.top);

        const activeSectionId = offsets[0]?.id ?? this.story.parts[0]?.id;
        if (activeSectionId) {
          this.activeSection.set(activeSectionId);
        }
      });
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
    this.scrollListener();
  }

  private initializeActiveSectionFromHash(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const hash = window.location.hash.replace('#', '');
    if (hash && this.story.parts.some(part => part.id === hash)) {
      this.activeSection.set(hash);
      setTimeout(() => this.scrollService.scrollTo(hash), 0);
    }
  }
}
