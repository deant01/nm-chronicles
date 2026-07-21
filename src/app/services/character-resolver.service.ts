import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CharacterDataService, CharacterDTO } from './character-data.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<CharacterDTO | null> {
  private readonly characterDataService = inject(CharacterDataService);

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<CharacterDTO | null> {
    const slug = route.paramMap.get('id');
    return slug ? this.characterDataService.getCharacter(slug) : null;
  }
}
