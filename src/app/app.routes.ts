import { Routes } from '@angular/router';
import { MainLayout } from '../layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../pages/categories-page/categories-page').then((m) => m.CategoriesPage),
        title: 'Категории',
      },
      {
        path: 'threads',
        loadComponent: () =>
          import('../pages/threads-page/threads-page').then((m) => m.ThreadsPage),
        title: 'Все темы',
      },
    ],
  },
];
