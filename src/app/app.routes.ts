import { Routes } from '@angular/router';
import { COUNTRIES } from './utils/country.data';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  ...COUNTRIES.map((country) => ({
    path: country.name.toLowerCase(),
    loadComponent: () =>
      import('./pages/country-details/country-details.component').then(
        (c) => c.CountryDetailsComponent,
      ),
    data: country,
  })),
];
