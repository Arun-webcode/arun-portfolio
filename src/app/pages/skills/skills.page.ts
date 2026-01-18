import { NgFor } from '@angular/common';
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
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, ThemeSwitcherComponent, NgFor]
})
export class SkillsPage implements OnInit {
  skills = [
    {
      category: 'Programming Languages',
      icon: 'code',
      items: [
        { name: 'HTML', level: 'Advanced', percent: 90 },
        { name: 'CSS', level: 'Advanced', percent: 85 },
        { name: 'JavaScript', level: 'Advanced', percent: 85 },
        { name: 'TypeScript', level: 'Intermediate', percent: 75 },
        { name: 'Java (Core)', level: 'Intermediate', percent: 70 },
      ],
    },
    {
      category: 'Frameworks/Libraries',
      icon: 'library',
      items: [
        { name: 'React.js', level: 'Intermediate', percent: 65 },
        { name: 'Angular', level: 'Advanced', percent: 80 },
        { name: 'Ionic', level: 'Advanced', percent: 80 },
        { name: 'Bootstrap', level: 'Advanced', percent: 85 },
        { name: 'Tailwind CSS', level: 'Advanced', percent: 85 },
        { name: 'Shadcn-UI', level: 'Intermediate', percent: 75 },
      ],
    },
    {
      category: 'Backend',
      icon: 'server',
      items: [
        { name: 'Node.js', level: 'Intermediate', percent: 75 },
        { name: 'Express.js', level: 'Intermediate', percent: 75 },
        { name: 'MongoDB', level: 'Intermediate', percent: 70 },
        { name: 'REST APIs', level: 'Intermediate', percent: 75 },
      ],
    },
    {
      category: 'Developer Tools',
      icon: 'construct',
      items: [
        { name: 'Git', level: 'Advanced', percent: 85 },
        { name: 'GitHub', level: 'Advanced', percent: 85 },
        { name: 'VS Code', level: 'Advanced', percent: 90 },
        { name: 'Postman', level: 'Intermediate', percent: 75 },
        { name: 'Agile Methodology', level: 'Intermediate', percent: 70 },
      ],
    },
    {
      category: 'Office Tools',
      icon: 'document',
      items: [
        { name: 'MS Word', level: 'Advanced', percent: 80 },
        { name: 'MS Excel', level: 'Intermediate', percent: 70 },
        { name: 'MS PowerPoint', level: 'Basics', percent: 50 },
        { name: 'Google Sheets', level: 'Advanced', percent: 85 },
      ],
    },
    {
      category: 'Soft Skills',
      icon: 'people',
      items: [
        { name: 'Email Writing', level: 'Advanced', percent: 85 },
        { name: 'Documentation', level: 'Advanced', percent: 80 },
        { name: 'Communication', level: 'Advanced', percent: 85 },
        { name: 'Team Collaboration', level: 'Advanced', percent: 85 },
      ],
    },
  ];

  certifications = [
    {
      title: 'Frontend Development',
      issuer: 'Coding Ninjas',
      date: '2023',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate30688647ebebf6946e2dd02255f7ec85e3b1d44.pdf'
    },
    {
      title: 'Backend Development',
      issuer: 'Coding Ninjas',
      date: '2023',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate_498f0c80a9972410_dd8ff0d12567d57ab74f207e3fe0ae35.pdf'
    },
    {
      title: 'Introduction to Java',
      issuer: 'Coding Ninjas',
      date: '2023',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate3068862c91622e08c5321a5c47dfe7cb855efd1.pdf'
    },
    {
      title: 'Data Structures in Java',
      issuer: 'Coding Ninjas',
      date: '2023',
      link: 'https://ninjasfiles.s3.amazonaws.com/certificate306886350ab77965487e1ee5c601350aa2347a8.pdf'
    },
    {
      title: 'Java Core Intern',
      issuer: 'Uniconverge Technologies Private Limited',
      date: '2023',
      link: 'https://www.theiotacademy.co/Certificatepdf/downloadpdfdetails/182'
    },
    {
      title: 'CCNA 200-301 Network Fundamentals',
      issuer: 'SimpliLearn',
      date: '2024',
      link: 'https://lnkd.in/gzwYzpn2'
    }
  ];

  constructor() {
    addIcons({ code, library, server, construct, document, people, ribbon, linkOutline, school, codeSlash, language, build });
  }

  ngOnInit() {
  }
}

