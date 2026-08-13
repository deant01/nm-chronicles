import { Component, computed, effect, inject, Input, OnChanges, OnDestroy, SimpleChanges, signal } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

interface SectionEntry {
  id: string;
  label: string;
}

const SECTIONS: SectionEntry[] = [
  { id: 'main', label: 'Hero' },
  { id: 'about', label: 'Series' },
  { id: 'listen', label: 'Prequel' },
  { id: 'characters', label: 'Characters' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'map', label: 'Map' },
  { id: 'author', label: 'Author' },
  { id: 'connect', label: 'Connect' },
];

const PREQUEL_SECTIONS: SectionEntry[] = [
  { id: 'main', label: 'Hero' },
  { id: 'part-1', label: 'Part 1' },
  { id: 'part-2', label: 'Part 2' },
  { id: 'part-3', label: 'Part 3' },
  { id: 'part-4', label: 'Part 4' },
  { id: 'part-5', label: 'Part 5' },
  { id: 'part-6', label: 'Part 6' },
  { id: 'part-7', label: 'Part 7' },
  { id: 'part-8', label: 'Part 8' },
  { id: 'part-9', label: 'Part 9' },
  { id: 'connect', label: 'Connect' },
];
@Component({
  selector: 'app-section-navigation',
  templateUrl: './section-navigation.html',
  styleUrls: ['./section-navigation.scss'],
})
export class SectionNavigation implements OnChanges, OnDestroy {
  @Input() isPrequel = false;
  sections = SECTIONS;

  private readonly scrollService = inject(ScrollService);
  private readonly isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

  private sectionObserver?: IntersectionObserver;
  private observedSections = new Set<string>();
  currentSection = signal(SECTIONS[0].id);
  private hasSeenContact = signal(false);
  showScrollUp = computed(() => this.hasSeenContact() && this.currentSection() !== 'main');
 
  currentSectionIndex = computed(() => this.sections.findIndex(section => section.id === this.currentSection()));
  currentLabel = computed(() => this.sections[this.currentSectionIndex()]?.label ?? '');
  canScrollPrevious = computed(() => this.currentSectionIndex() > 0);
  canScrollNext = computed(() => this.currentSectionIndex() < this.sections.length - 1);

  constructor() {
    if (this.isBrowser) {
      requestAnimationFrame(() => {
        this.createSectionObserver();
        this.checkForPendingSections();
        window.addEventListener('scroll', this.onScroll, { passive: true });
        window.addEventListener('resize', this.onScroll, { passive: true });
      });
    }
  }
  toggleScroll(): void {
    if (this.showScrollUp()) {
      this.scrollToPrevious();
      return;
    }

    this.scrollToNext();
  }

  buttonIcon(): string {
    return this.showScrollUp() ? '⤴' : '⤵';
  }

  buttonLabel(): string {
    const index = this.currentSectionIndex();
    const nextSection = this.showScrollUp()
      ? this.sections[index - 1]
      : this.sections[index + 1];

    return 'Go to ' + (nextSection?.label ?? (this.showScrollUp() ? 'Hero' : 'Contact'));
  }

  scrollToPrevious(): void {
    const index = this.currentSectionIndex();
    if (index <= 0) {
      return;
    }

    const targetId = this.sections[index - 1].id;
    this.scrollTo(targetId);
  }

  scrollToNext(): void {
    const index = this.currentSectionIndex();
    if (index >= this.sections.length - 1) {
      return;
    }

    const targetId = this.sections[index + 1].id;
    this.scrollTo(targetId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isPrequel']) {
      this.sections = this.isPrequel ? PREQUEL_SECTIONS : SECTIONS;
      this.currentSection.set(this.sections[0].id);

      if (this.isBrowser) {
        this.sectionObserver?.disconnect();
        this.observedSections.clear();
        requestAnimationFrame(() => {
          this.createSectionObserver();
          this.checkForPendingSections();
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();

    if (this.isBrowser) {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
    }
  }

  private createSectionObserver(): void {
    if (!this.isBrowser) {
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          this.currentSection.set(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        this.sectionObserver.observe(element);
        this.observedSections.add(section.id);
      }
    }
  }

  private checkForPendingSections(): void {
    if (!this.isBrowser) {
      return;
    }

    let foundSection = false;
    for (const section of this.sections) {
      if (!this.sectionObserver || this.observedSections.has(section.id)) {
        continue;
      }

      const element = document.getElementById(section.id);
      if (element) {
        this.sectionObserver.observe(element);
        this.observedSections.add(section.id);
        foundSection = true;
      }
    }

    if (foundSection) {
      this.updateCurrentSectionFromViewport();
    }

    if (this.sections.some((section) => !this.observedSections.has(section.id))) {
      requestAnimationFrame(() => this.checkForPendingSections());
    }
  }

  private onScroll = (): void => {
    this.updateCurrentSectionFromViewport();
  };

  private updateCurrentSectionFromViewport(): void {
    if (!this.isBrowser) {
      return;
    }

    const viewportMiddle = window.innerHeight * 0.35;
    let activeSection = this.sections[0].id;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();
      if (rect.top <= viewportMiddle && rect.bottom > 0) {
        activeSection = section.id;
      }
    }

    this.currentSection.set(activeSection);
    this.hasSeenContact.set(activeSection === 'connect' || this.hasSeenContact() && activeSection !== 'main');
  }

  private scrollTo(id: string): void {
    this.scrollService.scrollTo(id, { behavior: 'smooth', block: 'start' });
  }
}
