import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { briefcase, calendar, location, checkmarkCircle } from 'ionicons/icons';
import { ThemeSwitcherComponent } from '../components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, ThemeSwitcherComponent]
})
export class ExperiencePage implements OnInit {

  constructor() {
    addIcons({ briefcase, calendar, location, checkmarkCircle });
  }

  ngOnInit() {
  }
}

