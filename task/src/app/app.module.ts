import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistingComponent } from './userlisting/userlisting.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserlistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      "path" : "registration",
      "component" : RegistrationComponent
    }, {
      "path" : "userlisting",
      "component" : UserlistingComponent,
    }, {
      "path" : "**",
      "redirectTo" : "/registration",
      "pathMatch" : "full"
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
