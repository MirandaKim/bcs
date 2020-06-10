import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';
import { MainNavComponent } from './components/modules/main-nav/main-nav.component';
import { FooterComponent } from './components/modules/footer/footer.component';
import { ContactComponent } from './components/modules/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestPageComponent,
    MainNavComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
