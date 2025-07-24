import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  flag,
  personCircle,
  mail,
  call,
  location,
  school,
  heart,
  codeSlash,
  phonePortrait,
  trendingUp,
  library,
  people,
  bulb, trophy, medal, musicalNotesOutline, musicalNoteOutline, airplaneOutline
} from 'ionicons/icons';
import { ThemeSwitcherComponent } from '../components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, ThemeSwitcherComponent]
})
export class AboutPage implements OnInit {

  constructor() {
    addIcons({ flag, personCircle, mail, call, location, school, trophy, medal, codeSlash, people, trendingUp, heart, phonePortrait, library, bulb, musicalNotesOutline, airplaneOutline, musicalNoteOutline });
  }

  ngOnInit() {
  }
}

