import { Injectable } from '@angular/core';
import cityData from '../../../assets/data/city.json';

export interface CityImage {
  src: string;
  alt: string;
}

export interface CityDistrict {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: CityImage;
  tags: string[];
  displayOrder: number;
}

export interface CityData {
  name: string;
  subtitle: string;
  overview: string;
  geography: {
    river: string;
    sea: string;
  };
  mapImage: CityImage;
  districts: CityDistrict[];
}

@Injectable({ providedIn: 'root' })
export class CityDataService {
  private readonly city = cityData as CityData;

  getCity(): CityData {
    return this.city;
  }
}
