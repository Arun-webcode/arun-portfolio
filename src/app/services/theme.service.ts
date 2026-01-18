import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<Theme>('dark');
  public theme$ = this.currentTheme.asObservable();

  constructor() {
    // Load saved theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    const initialTheme = savedTheme || 'dark';
    this.setTheme(initialTheme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.next(theme);
    localStorage.setItem('portfolio-theme', theme);
    
    // Apply theme to document body
    document.body.setAttribute('data-theme', theme);
    
    // Update CSS custom properties based on theme
    this.updateThemeVariables(theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme.value === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  getCurrentTheme(): Theme {
    return this.currentTheme.value;
  }

  private updateThemeVariables(theme: Theme): void {
    const root = document.documentElement;
    
    if (theme === 'light') {
      // Light theme variables
      root.style.setProperty('--portfolio-primary', '#FFFFFF');
      root.style.setProperty('--portfolio-secondary', '#673AB7');
      root.style.setProperty('--portfolio-accent-1', '#00BCD4');
      root.style.setProperty('--portfolio-accent-2', '#424242');
      root.style.setProperty('--portfolio-accent-3', '#4CAF50');
      
      // Light background colors
      root.style.setProperty('--portfolio-bg-primary', '#FFFFFF');
      root.style.setProperty('--portfolio-bg-secondary', '#F5F5F5');
      root.style.setProperty('--portfolio-bg-card', 'rgba(103, 58, 183, 0.05)');
      
      // Light text colors
      root.style.setProperty('--portfolio-text-primary', '#212121');
      root.style.setProperty('--portfolio-text-secondary', '#757575');
      root.style.setProperty('--portfolio-text-accent', '#00BCD4');
      
      // Light border and shadow
      root.style.setProperty('--portfolio-border', 'rgba(103, 58, 183, 0.2)');
      root.style.setProperty('--portfolio-shadow', '0 4px 20px rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--portfolio-glow', '0 0 20px rgba(0, 188, 212, 0.2)');
    } else {
      // Dark theme variables (original)
      root.style.setProperty('--portfolio-primary', '#000000');
      root.style.setProperty('--portfolio-secondary', '#673AB7');
      root.style.setProperty('--portfolio-accent-1', '#00BCD4');
      root.style.setProperty('--portfolio-accent-2', '#E0E0E0');
      root.style.setProperty('--portfolio-accent-3', '#00FF88');
      
      // Dark background colors
      root.style.setProperty('--portfolio-bg-primary', '#000000');
      root.style.setProperty('--portfolio-bg-secondary', '#1a1a1a');
      root.style.setProperty('--portfolio-bg-card', 'rgba(103, 58, 183, 0.1)');
      
      // Dark text colors
      root.style.setProperty('--portfolio-text-primary', '#E0E0E0');
      root.style.setProperty('--portfolio-text-secondary', '#B0B0B0');
      root.style.setProperty('--portfolio-text-accent', '#00BCD4');
      
      // Dark border and shadow
      root.style.setProperty('--portfolio-border', 'rgba(103, 58, 183, 0.3)');
      root.style.setProperty('--portfolio-shadow', '0 4px 20px rgba(103, 58, 183, 0.2)');
      root.style.setProperty('--portfolio-glow', '0 0 20px rgba(0, 188, 212, 0.3)');
    }
  }
}

