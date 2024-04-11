import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-portfolio';

  userTheme: any;
  systemTheme: any;
  rootElement = document.documentElement;
  darkMode = true;
  loading: boolean = false;
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Show loader when navigation starts
        this.loading = true;

      } else if (event instanceof NavigationEnd) {
        // Hide loader when navigation ends (page has finished loading)
        setTimeout(() =>{
          this.loading = false;
        }, 1);
      }
    });

    localStorage.setItem('theme', 'dark');
    this.userTheme = localStorage.getItem('theme');
    this.systemTheme = window.matchMedia('(prefers-color-scheme:dark)').matches;


    this.themeCheck();
  }

  themeCheck() {
    if (this.userTheme === 'dark' || (!this.userTheme && this.systemTheme)) {
      this.renderer.addClass(this.rootElement, 'dark');
      localStorage.setItem('theme', 'dark');
      this.darkMode = true;
    }
  }

  toggleDark(): void {
    if (this.rootElement.classList.contains('dark')) {
      this.renderer.removeClass(this.rootElement, 'dark');
      localStorage.setItem('theme', 'light');
      this.darkMode = false;
      return;
    }

    this.renderer.addClass(this.rootElement, 'dark');
    localStorage.setItem('theme', 'dark');
    this.darkMode = true;
  }
}
