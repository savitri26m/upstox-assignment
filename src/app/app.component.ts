import { Component } from '@angular/core';
import{ Router, Event,NavigationStart, NavigationEnd } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test-assignment';

  loadingIndicator = true;

  constructor(private _router: Router) {
    this._router.events.subscribe((routeEvent: Event) => {
      if(routeEvent instanceof NavigationStart) {
        this.loadingIndicator = true;
      }

      if(routeEvent instanceof NavigationEnd) {
        this.loadingIndicator = false;
      }

    })
  }
}
