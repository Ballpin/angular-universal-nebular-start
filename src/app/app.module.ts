import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    TransferHttpCacheModule,
    // this will enable the default theme, you can change this by passing `` to enable the dark theme
    NbThemeModule.forRoot({ name: 'corporate' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
