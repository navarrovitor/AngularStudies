import { Component } from '@angular/core';

@Component({
  selector: 'mc-root',
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <mc-movies></mc-movies>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string =
    'Totally not trying to sound pretentious Movie Collection';
}
