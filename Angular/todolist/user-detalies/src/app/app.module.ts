import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserDetaliesTwoComponent } from './components/user-detalies-two/user-detalies-two.component';
import { UserDetailsThreComponent } from './components/user-details-thre/user-details-thre.component';
import { AllPostComponent } from './components/all-post/all-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    UserDetailsComponent,
    UserDetaliesTwoComponent,
    UserDetailsThreComponent,
    AllPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
