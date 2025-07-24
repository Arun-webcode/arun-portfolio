import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { codeSlash, linkOutline, logoGithub, star, statsChart } from 'ionicons/icons';
import { ThemeSwitcherComponent } from '../components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, ThemeSwitcherComponent]
})
export class ProjectsPage implements OnInit {

  constructor(private router: Router) {
    addIcons({ codeSlash, linkOutline, logoGithub, star, statsChart });
  }

  ngOnInit() {
  }

  navigateToContact() {
    this.router.navigate(['/tabs/contact']);
  }
}

