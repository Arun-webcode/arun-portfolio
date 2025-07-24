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
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../about/about.page').then((m) => m.AboutPage),
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('../experience/experience.page').then((m) => m.ExperiencePage),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('../projects/projects.page').then((m) => m.ProjectsPage),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('../skills/skills.page').then((m) => m.SkillsPage),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../contact/contact.page').then((m) => m.ContactPage),
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
