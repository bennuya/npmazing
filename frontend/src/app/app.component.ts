import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isFixed: boolean;

  constructor() { }

  ngOnInit() { }
  

  // Scroll to Top on every Request in the Router Outlet
  onActivate(event: Event) {
    window.scrollTo(0, 0);
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.isFixed = true;
    } else if (this.isFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.isFixed = false;
    }
  } scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }


}
