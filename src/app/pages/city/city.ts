import { Component } from '@angular/core';
import { Contacts } from '../../layout/shared-components/contacts/contacts';
import { LightHouse } from "../../layout/shared-components/light-house/light-house";

@Component({
  selector: 'app-city',
  imports: [Contacts, LightHouse],
  templateUrl: './city.html',
  styleUrl: './city.scss',
})
export class City {}
