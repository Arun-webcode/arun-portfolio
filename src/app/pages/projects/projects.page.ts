import { NgFor, NgIf } from '@angular/common';
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
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, ThemeSwitcherComponent, NgFor, NgIf]
})
export class ProjectsPage implements OnInit {
  stats = [
    {
      icon: 'code-slash',
      number: '3+',
      label: 'Major Projects',
      description: 'Full-stack and frontend applications'
    },
    {
      icon: 'layers',
      number: '10+',
      label: 'Technologies',
      description: 'Modern web development stack'
    },
    {
      icon: 'globe',
      number: '2',
      label: 'Live Deployments',
      description: 'Production-ready applications'
    },
    {
      icon: 'git-branch',
      number: '100%',
      label: 'Open Source',
      description: 'Available on GitHub'
    }
  ];

  projects = [
    {
      title: 'Seeker India (Job Portal)',
      description: 'A robust, scalable Job Portal with a Node.js/Express backend and Angular 19 frontend. Features role-based access, secure JWT/Google Auth, real-time updates via Socket.io, and Cloudinary file handling.',
      icon: 'briefcase',
      featured: true,
      techStack: ['Angular 19', 'Tailwind CSS', 'Node.js', 'Express.js v5', 'MongoDB', 'Socket.io', 'Cloudinary', 'TypeScript'],
      live: 'https://seekerindia.netlify.app/',
      github: ''
    },
    {
      title: 'QR Code Generator',
      description: 'UI tool developed in React.js for generating customizable QR codes with downloadable output, using optimized frontend components for seamless user experience.',
      icon: 'qr-code',
      featured: false,
      techStack: ['HTML', 'Tailwind CSS', 'React.JS', 'Vite'],
      live: 'https://qr-generator-webcode.netlify.app/',
      github: 'https://github.com/Arun-webcode/ReactJs-Mini-Projects/tree/main/01-qrcode-gen'
    },
    {
      title: 'Banking Information System',
      description: 'Simulated ATM system with database integration built using object-oriented programming in Java. Features authentication, CRUD account operations, transaction logs, and secure login workflows.',
      icon: 'card',
      featured: false,
      techStack: ['Java Core', 'Javax', 'Swing', 'AWT', 'JDBC', 'MySQL', 'NetBeans'],
      github: 'https://github.com/Arun-webcode/Upskills-Campus'
    },
    // {
    //   title: 'Full Stack Todo App',
    //   description: 'A responsive full-stack task management application built with the MEAN stack and Ionic framework. Features include CRUD operations on tasks, secure authentication (login, logout, OTP-based signup, password recovery), and profile updates with image support. Backend is powered by Node.js, Express, and MongoDB, tested using Postman.',
    //   icon: 'list',
    //   featured: true,
    //   techStack: ['Angular', 'Ionic', 'Node.js', 'Express.js', 'MongoDB', 'Postman', 'HTML', 'SCSS', 'TypeScript', 'Netlify', 'Render'],
    //   github: 'https://github.com/Arun-webcode/todo-app-frontend',
    //   live: 'https://todo-app-webcode.netlify.app/'
    // }
  ];

  constructor(private router: Router) {
    addIcons({ briefcase, globe, logoGithub, qrCode, card, analytics, codeSlash, layers, gitBranch, mail, linkOutline, star, statsChart });
  }

  ngOnInit() {
  }

  navigateToContact() {
    this.router.navigate(['/tabs/contact']);
  }
}

