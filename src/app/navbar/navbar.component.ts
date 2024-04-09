import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit{
  istoggle = false;
  scrolledTop = false;

  userTheme: any;
  systemTheme: any;
  rootElement = document.documentElement;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit():void {
    this.scrolledTop = true;
    console.log(this.scrolledTop);

    localStorage.setItem("theme","dark");

    this.userTheme = localStorage.getItem("theme");
    this.systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

    console.log(this.userTheme, this.systemTheme);

    this.themeCheck();
  }

  themeCheck() {
    if(this.userTheme === "dark" || (!this.userTheme && this.systemTheme)){

      this.renderer.addClass(this.rootElement, 'dark');

      localStorage.setItem("theme","dark");
    }
  }

  toggleDark():void{
    if(this.rootElement.classList.contains('dark')){
      this.renderer.removeClass(this.rootElement, 'dark');
      localStorage.setItem("theme","light");
      return
    }

    this.renderer.addClass(this.rootElement, 'dark');
    localStorage.setItem("theme","dark");
  }

  toggleMenu():void {
    this.istoggle = !this.istoggle;
  }

  closeMenu():void {
    this.istoggle = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Logic to check if scrolled to the top of the screen
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop === 0) {
      this.scrolledTop = true;
    }else{
      this.scrolledTop = false;
    }
  }

  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"})
  }
  
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"})
  }

  toSkills(){
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"})
  }

  toProjects(){
    document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
  }




}
