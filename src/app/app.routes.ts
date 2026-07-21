import { Routes } from '@angular/router';
import { closeLightHouseGuard } from './guards/close-lighthouse.guard';
import { CharacterResolver } from './services/character-resolver.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./pages/character/character').then(
        m => m.Character
      ),
    canDeactivate: [closeLightHouseGuard],
    resolve: {
      character: CharacterResolver,
    },
  },
  {
    path: 'city',
    loadComponent: () =>
      import('./pages/city/city').then(m => m.City),
    canDeactivate: [closeLightHouseGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];