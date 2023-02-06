import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'home',component:HomeComponent},
  {path: 'business',component:BusinessComponent},
  {path: 'technology',component:TechnologyComponent},
  {path: 'sports',component:SportsComponent},
  {path: 'science',component:ScienceComponent},
  {path: 'health',component:HealthComponent},
  {path: 'entertainment',component:EntertainmentComponent},
  {path: 'bookmark',component:BookmarksComponent},
  {path: '**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
