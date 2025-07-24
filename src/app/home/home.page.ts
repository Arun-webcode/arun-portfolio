import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  codeSlash, 
  mail, 
  logoLinkedin, 
  logoGithub, 
  logoWhatsapp, 
  link,
  download
} from 'ionicons/icons';
import { ThemeSwitcherComponent } from '../components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, ThemeSwitcherComponent]
})
export class HomePage implements OnInit {

  constructor(private router: Router) {
    addIcons({ 
      codeSlash, 
      mail, 
      logoLinkedin, 
      logoGithub, 
      logoWhatsapp, 
      link,
      download
    });
  }

  ngOnInit() {}

  navigateToProjects() {
    this.router.navigate(['/tabs/projects']);
  }

  navigateToContact() {
    this.router.navigate(['/tabs/contact']);
  }
}