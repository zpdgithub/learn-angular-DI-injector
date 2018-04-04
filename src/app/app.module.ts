import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

/*
 * The injectable service
 */
class MyService {
  getValue(): string {
    return 'a value';
  }
}

@Component({
  selector: 'app-root',
  template: `
  <button (click)="invokeService()">Get Value</button>
  `
})
export class AppComponent {
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
