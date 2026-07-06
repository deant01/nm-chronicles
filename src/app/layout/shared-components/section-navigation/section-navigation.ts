import { Component, computed, effect, inject, OnDestroy, signal } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

interface SectionEntry {
  id: string;
  label: string;
}

const SECTIONS: SectionEntry[] = [
  { id: 'main', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'listen', label: 'Listen' },
  { id: 'characters', label: 'Characters' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'map', label: 'Map' },
  { id: 'author', label: 'Author' },
  { id: 'connect', label: 'Connect' },
];

@Component({
  selector: 'app-section-navigation',
  templateUrl: './section-navigation.html',
  styleUrls: ['./section-navigation.scss'],
})
export class SectionNavigation implements OnDestroy {
  private readonly scrollService = inject(ScrollService);
  private readonly isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

  private scrollPosition = signal(0);
  currentSection = signal(SECTIONS[0].id);

  sections = SECTIONS;
  currentSectionIndex = computed(() => this.sections.findIndex(section => section.id === this.currentSection()));
  currentLabel = computed(() => this.sections[this.currentSectionIndex()]?.label ?? '');
  previousSection = computed(() => this.sections[this.currentSectionIndex() - 1]);
  nextSection = computed(() => this.sections[this.currentSectionIndex() + 1]);
  canScrollPrevious = computed(() => this.currentSectionIndex() > 0);
  canScrollNext = computed(() => this.currentSectionIndex() < this.sections.length - 1);

  constructor() {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      this.onScroll();
    }

    effect(() => {
      this.scrollPosition();
      this.updateCurrentSection();
    });
  }

  scrollToPrevious(): void {
    const index = this.currentSectionIndex();
    if (index <= 0) {
      return;
    }

    this.scrollTo(this.sections[index - 1].id);
  }

  scrollToNext(): void {
    const index = this.currentSectionIndex();
    if (index >= this.sections.length - 1) {
      return;
    }

    this.scrollTo(this.sections[index + 1].id);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
    }
  }

  private onScroll = (): void => {
    this.scrollPosition.set(window.scrollY);
  };

  private updateCurrentSection(): void {
    if (!this.isBrowser) {
      return;
    }

    const candidate = this.sections.reduce((active, section) => {
      const element = document.getElementById(section.id);
      if (!element) {
        return active;
      }

      const top = element.getBoundingClientRect().top;
      if (top <= 120) {
        return section.id;
      }

      return active;
    }, this.sections[0].id);

    this.currentSection.set(candidate);
  }

  private scrollTo(id: string): void {
    this.scrollService.scrollTo(id, { behavior: 'smooth', block: 'start' });
  }
}
