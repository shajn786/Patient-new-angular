import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ViewallPatientComponent } from './viewall-patient/viewall-patient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

const myRoutes : Routes=
[
  {
path:"",component:AddPatientComponent
},
{
  path:"viewall",component:ViewallPatientComponent
},
{
  path:"search",component:SearchComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ViewallPatientComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
