import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdComponent } from './bird/bird.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import {QuizComponent } from './quiz/quiz.component';
// import { AddBirdComponent } from './add-bird/add-bird.component';
// import { LoginComponent } from './login/login.component';
// import { LogoutComponent } from './logout/logout.component';
// import { AuthGoodService } from './service/auth-good.service';

const routes: Routes = [
  { path: '', component: BirdListComponent},
  { path: 'birdlist', component: BirdListComponent},
  { path: 'quiz', component: QuizComponent}
  // { path: 'login', component: LoginComponent },
  // { path: '', component: BirdComponent, canActivate: [AuthGoodService] },
  // { path: 'addbird', component: AddBirdComponent, canActivate: [AuthGoodService]},
  // { path: 'logout', component: LogoutComponent, canActivate: [AuthGoodService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
