import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MainNavComponent } from './components/modules/main-nav/main-nav.component';
import { FooterComponent } from './components/modules/footer/footer.component';
import { ContactComponent } from './components/modules/contact/contact.component';
import { ProjectPageComponent } from './components/pages/project-page/project-page.component';
import { ResearchPageComponent } from './components/pages/research-page/research-page.component';
import { ToolkitPageComponent } from './components/pages/toolkit-page/toolkit-page.component';
import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainNavComponent,
    FooterComponent,
    ContactComponent,
    ProjectPageComponent,
    ResearchPageComponent,
    ToolkitPageComponent,
    AboutMePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
