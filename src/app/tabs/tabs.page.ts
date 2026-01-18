import { NgFor } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  home,
  person,
  briefcase,
  codeSlash,
  build,
  mail
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, NgFor],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  tabItems = [
    { tab: 'home', label: 'Home', icon: 'home', href: '/tabs/home' },
    { tab: 'about', label: 'About', icon: 'person', href: '/tabs/about' },
    { tab: 'experience', label: 'Experience', icon: 'briefcase', href: '/tabs/experience' },
    { tab: 'projects', label: 'Projects', icon: 'code-slash', href: '/tabs/projects' },
    { tab: 'skills', label: 'Skills', icon: 'build', href: '/tabs/skills' },
    { tab: 'contact', label: 'Contact', icon: 'mail', href: '/tabs/contact' }
  ];

  constructor() {
    addIcons({
      home,
      person,
      briefcase,
      codeSlash,
      build,
      mail
    });
  }
}
