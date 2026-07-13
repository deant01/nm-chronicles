import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightHouse } from './light-house';

describe('LightHouse', () => {
  let component: LightHouse;
  let fixture: ComponentFixture<LightHouse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightHouse],
    }).compileComponents();

    fixture = TestBed.createComponent(LightHouse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the lightbox', () => {
    component.open('assets/test-image.png', 'Test image');
    expect(component.lightboxOpen()).toBe(true);
    expect(component.lightboxSrc()).toBe('assets/test-image.png');
    expect(component.lightboxAlt()).toBe('Test image');

    component.close();
    expect(component.lightboxOpen()).toBe(false);
  });
});
