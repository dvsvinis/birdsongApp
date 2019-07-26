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

@NgModule({
  declarations: [
    AppComponent,
     BirdComponent,
     BirdListComponent,
     BirdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BirdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
