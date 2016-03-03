import template     from './app.html';
import style        from './app.scss';
import {Component}  from 'angular2/core';

@Component({
  selector: 'app',
  template: template,
  styles: [style]
})

export class AppComponent {
  asdf = 1234;
  constructor() {
    console.log(this.asdf);
  }
}
