import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
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

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
  ) {
    this.animateGlow();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  animateGlow() {
    const glow = document.querySelector('.glow') as HTMLElement;
    if (glow) {
      this.currentX += (this.targetX - this.currentX) * 0.1;
      this.currentY += (this.targetY - this.currentY) * 0.1;
      glow.style.left = this.currentX + 'px';
      glow.style.top = this.currentY + 'px';
    }
    requestAnimationFrame(() => this.animateGlow());
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show loader when navigation starts
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        // Hide loader when navigation ends (page has finished loading)
        setTimeout(() => {
          this.loading = false;
        }, 3000);
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
