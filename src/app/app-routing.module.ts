import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProjectPageComponent } from './components/pages/project-page/project-page.component';
import { ResearchPageComponent } from './components/pages/research-page/research-page.component'; 
import { ToolkitPageComponent } from './components/pages/toolkit-page/toolkit-page.component';


const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMePageComponent,
    data: {title: 'About Me'}
  },
  {
    path: '',
    component: HomePageComponent,
    data: {title: 'Home'}
  }, 
  {
    path: 'project',
    component: ProjectPageComponent,
    data: {title: 'The Project'}
  },
  {
    path: 'research',
    component: ResearchPageComponent,
    data: {title: 'Research'}
  },
  {
    path: 'toolkit',
    component: ToolkitPageComponent,
    data: {title: 'The Toolkit'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
