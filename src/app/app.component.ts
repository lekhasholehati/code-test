import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'code-test';

  constructor(
    private router: Router
  ) { }


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (!!event.url && event.url.match(/^\/#/)) {
          let url = event.url.replace('/#', '')
          this.router.navigateByUrl(url);
        }
      }
    });
  }


}
