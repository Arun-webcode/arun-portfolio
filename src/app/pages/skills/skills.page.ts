import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { build, codeSlash, server, construct, ribbon, library, document, people, school, language, code, linkOutline } from 'ionicons/icons';
import { ThemeSwitcherComponent } from 'src/app/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, ThemeSwitcherComponent]
})
export class SkillsPage implements OnInit {

  constructor() {
    addIcons({ code, library, server, construct, document, people, ribbon, linkOutline, school, codeSlash, language, build });
  }

  ngOnInit() {
  }
}

