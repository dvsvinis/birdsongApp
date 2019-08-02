import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BirdComponent } from './bird/bird.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdFormComponent } from './bird-form/bird-form.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddBirdComponent } from './add-bird/add-bird.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
     BirdComponent,
     BirdListComponent,
     BirdFormComponent,
     HeaderComponent,
     LoginComponent,
     LogoutComponent,
     AddBirdComponent,
     DragdropComponent,
     QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
