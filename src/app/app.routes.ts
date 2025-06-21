import { Routes } from '@angular/router';
import { WeatherHome } from './features/weather-home/weather-home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: WeatherHome,
  },
];
