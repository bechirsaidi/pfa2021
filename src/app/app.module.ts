import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentComponent } from './student/student.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// MDB Angular Free
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md'

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StatsCardComponent } from './stats-card/stats-card.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import { StatsCard2Component } from './stats-card2/stats-card2.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './Signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'courses', component : CoursesComponent},
  {path : 'aboutus', component : AboutusComponent},
  {path : 'contact', component: ContactComponent},
  {path : '404', component: NotfoundComponent},
  {path:'student',component:StudentComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminDashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path : '**' , redirectTo : '404' }

];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    CoursesComponent,
    ContactComponent,
    NotfoundComponent,
    StudentComponent,
    CartComponent,
    AdminDashboardComponent,
    StatsCardComponent,
    StatsCard2Component,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    RouterModule.forRoot(routes),
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MDBBootstrapModule.forRoot(),
    MatTooltipModule,
    FormsModule, ReactiveFormsModule,
    CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule,


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
