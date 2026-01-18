import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { sunny, moon } from 'ionicons/icons';
import { ThemeService, Theme } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon]
})
export class ThemeSwitcherComponent implements OnInit, OnDestroy {
  currentTheme: Theme = 'dark';
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeService) {
    addIcons({ sunny, moon });
  }

  ngOnInit() {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get themeIcon(): string {
    return this.currentTheme === 'dark' ? 'sunny' : 'moon';
  }

  get themeLabel(): string {
    return this.currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}

