import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/categories-page/categories-page').then((m) => m.CategoriesPage),
      },
    ],
  },
];
