import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'categories',
        loadComponent: () =>
          import('../pages/categories-page/categories-page').then((m) => m.CategoriesPage),
      },
      {
        path: 'threads',
        loadComponent: () =>
          import('../pages/threads-page/threads-page').then((m) => m.ThreadsPage),
      },
    ],
  },
];
