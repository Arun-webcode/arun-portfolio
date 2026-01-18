import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../pages/about/about.page').then((m) => m.AboutPage),
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('../pages/experience/experience.page').then((m) => m.ExperiencePage),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('../pages/projects/projects.page').then((m) => m.ProjectsPage),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('../pages/skills/skills.page').then((m) => m.SkillsPage),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../pages/contact/contact.page').then((m) => m.ContactPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
