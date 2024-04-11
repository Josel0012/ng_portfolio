import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  istoggle = false;
  scrolledTop = false;

  userTheme: any;
  systemTheme: any;
  rootElement = document.documentElement;
  darkMode = true;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.scrolledTop = true;

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

  toggleMenu(): void {
    this.istoggle = !this.istoggle;
  }

  closeMenu(): void {
    this.istoggle = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollTop === 0) {
      this.scrolledTop = true;
    } else {
      this.scrolledTop = false;
    }
  }

  setActive(clickedItem: HTMLElement, id: any): void {
    console.log(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const listItems = document.querySelectorAll('#menu-option li');
    listItems.forEach((item) => item.classList.remove('active'));

    clickedItem.classList.add('active');
  }
}
