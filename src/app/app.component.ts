import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio';

  userTheme: any;
  systemTheme: any;
  rootElement = document.documentElement;
  darkMode = true;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }


  ngOnInit():void {


    localStorage.setItem("theme","dark");
    this

    this.userTheme = localStorage.getItem("theme");
    this.systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

    console.log(this.userTheme, this.systemTheme);

    this.themeCheck();
  }

  themeCheck() {
    if(this.userTheme === "dark" || (!this.userTheme && this.systemTheme)){
      this.renderer.addClass(this.rootElement, 'dark');
      localStorage.setItem("theme","dark");
      this.darkMode = true;
    }
  }

  toggleDark():void{
    if(this.rootElement.classList.contains('dark')){
      this.renderer.removeClass(this.rootElement, 'dark');
      localStorage.setItem("theme","light");
      this.darkMode = false;
      return
    }

    this.renderer.addClass(this.rootElement, 'dark');
    localStorage.setItem("theme","dark");
    this.darkMode = true;
  }


}
