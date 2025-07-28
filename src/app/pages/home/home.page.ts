import { NgFor } from '@angular/common';
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
import { ThemeSwitcherComponent } from 'src/app/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, ThemeSwitcherComponent, NgFor]
})
export class HomePage implements OnInit {
  stats: { number: string; label: string }[] = [];
  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'logo-linkedin',
      url: 'https://www.linkedin.com/in/arunwebcode'
    },
    {
      name: 'GitHub',
      icon: 'logo-github',
      url: 'https://github.com/Arun-webcode'
    },
    {
      name: 'Email',
      icon: 'mail',
      url: 'mailto:arun.webcode@gmail.com'
    },
    {
      name: 'WhatsApp',
      icon: 'logo-whatsapp',
      url: 'https://api.whatsapp.com/send?phone=919315325253&text=Hi%20Arun%2C%20I%20visited%20your%20site!'
    },
    {
      name: 'Linktree',
      icon: 'link',
      url: 'https://linktr.ee/Arun.webcode'
    }
  ];

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

  ngOnInit(): void {
    const startDate = new Date('2024-10-01'); // 1st October 2024
    const today = new Date();
    const monthsExperience = this.calculateMonthDifference(startDate, today);

    this.stats = [
      { number: `${monthsExperience}+`, label: 'Months Experience' },
      { number: '3+', label: 'Projects Completed' },
      { number: '10+', label: 'Technologies' },
      { number: '5+', label: 'Certifications' }
    ];
  }

  calculateMonthDifference(start: Date, end: Date): number {
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    const totalMonths = years * 12 + months;

    if (end.getDate() >= start.getDate()) {
      return totalMonths + 1;
    }
    return totalMonths;
  }

  navigateToProjects() {
    this.router.navigate(['/tabs/projects']);
  }

  navigateToContact() {
    this.router.navigate(['/tabs/contact']);
  }
}