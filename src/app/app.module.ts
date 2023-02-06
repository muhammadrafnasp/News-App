import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ImageslideComponent } from './imageslide/imageslide.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BusinessComponent,
    TechnologyComponent,
    SportsComponent,
    HealthComponent,
    ScienceComponent,
    EntertainmentComponent,
    FilterPipe,
    BookmarksComponent,
    ImageslideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
