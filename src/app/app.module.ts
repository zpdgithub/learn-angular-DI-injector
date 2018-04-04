import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  Component,
  ReflectiveInjector
} from '@angular/core';

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
  myService: MyService;

  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([MyService]); // 创建一个新的注入器
    this.myService = injector.get(MyService); // 注入器给我们一个MyService的实例
    console.log('Same instance?', this.myService === injector.get(MyService));
  }

  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
  }
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
