import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdComponent } from './bird/bird.component';
import { AddBirdComponent } from './add-bird/add-bird.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdFormComponent } from './bird-form/bird-form.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: BirdComponent },
  { path: 'birds', component: BirdListComponent },
  { path: 'addbird', component: AddBirdComponent },
  { path: 'birdform', component: BirdFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
