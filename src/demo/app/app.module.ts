import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {RouterModule} from '@angular/router'
import {YahteePopoverModule} from 'yahtee-popover'

@NgModule({
  imports: [
    BrowserModule,
    YahteePopoverModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
