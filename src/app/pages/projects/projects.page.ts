import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { codeSlash, linkOutline, logoGithub, star, statsChart, briefcase, globe, qrCode, card, analytics, layers, gitBranch, mail } from 'ionicons/icons';
import { ThemeSwitcherComponent } from 'src/app/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, ThemeSwitcherComponent]
})
export class ProjectsPage implements OnInit {

  constructor(private router: Router) {
    addIcons({ briefcase, globe, logoGithub, qrCode, card, analytics, codeSlash, layers, gitBranch, mail, linkOutline, star, statsChart });
  }

  ngOnInit() {
  }

  navigateToContact() {
    this.router.navigate(['/tabs/contact']);
  }
}

