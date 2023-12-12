import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './component/students/students.component';
import { NavbarComponent } from './navbar/navbar.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';

const appRoutes:Routes=[
  {path:'',component:StudentsComponent},
  {path:'edit/:id', component:StudentEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NavbarComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
