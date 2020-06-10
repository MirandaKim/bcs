import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {title: 'Home'}
  }, 
  {
    path: 'test',
    component: TestPageComponent,
    data: {title: 'Test'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
