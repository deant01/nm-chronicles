import { Component, inject } from '@angular/core';
import { LightHouseService } from './light-house.service';

@Component({
  selector: 'app-light-house',
  imports: [],
  templateUrl: './light-house.html',
  styleUrls: ['./light-house.scss'],
})
export class LightHouse {
  private readonly lightHouseService = inject(LightHouseService);

  readonly isOpen = this.lightHouseService.isOpen;
  readonly src = this.lightHouseService.src;
  readonly alt = this.lightHouseService.alt;

  close(event?: Event): void {
    event?.stopPropagation();
    this.lightHouseService.hide();
  }
}

