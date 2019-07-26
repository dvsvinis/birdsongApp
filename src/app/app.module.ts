import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BirdComponent } from './bird/bird.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdFormComponent } from './bird-form/bird-form.component';
import { BirdService } from './service/bird-service.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddBirdComponent } from './add-bird/add-bird.component';

@NgModule({
  declarations: [
    AppComponent,
     BirdComponent,
     BirdListComponent,
     BirdFormComponent,
     HeaderComponent,
     LoginComponent,
     LogoutComponent,
     AddBirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
