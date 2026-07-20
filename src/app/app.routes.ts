import { Routes } from '@angular/router';
import { closeLightHouseGuard } from './guards/close-lighthouse.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin').then(m => m.Admin),
    canActivate: [adminGuard],
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./pages/character/character').then(
        m => m.Character
      ),
    canDeactivate: [closeLightHouseGuard],
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