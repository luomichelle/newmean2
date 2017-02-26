import { Component } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'angular2-mean-starter',
  directives: [HomeComponent],
  template: `
    <home></home>
  `
})

export class angular2MeanStarter {
  constructor() {}
}
