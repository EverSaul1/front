import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import {Route, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
const routes: Route[] = [
  {path:'home', component:HomeComponent},
  {path:'categoria-form', component:CategoriaFormComponent},
  {path:'categoria-list', component:CategoriaListComponent},
  {path:'categoria-form/:id', component:CategoriaFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
