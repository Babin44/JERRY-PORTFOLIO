import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Modules/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'HOMEPAGE', component: HomepageComponent },
      // { path: 'statistics', component: StatisticsComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
