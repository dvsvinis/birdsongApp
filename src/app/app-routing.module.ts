import { BirdDetailsComponent } from './bird-details/bird-details.component';
import { CreateBirdComponent } from './create-bird/create-bird.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdListComponent } from './bird-list/bird-list.component';


const routes: Routes = [
{ path: '', redirectTo: 'bird', pathMatch: 'full' },
{ path: 'birds', component: BirdListComponent },
{ path: 'add', component: CreateBirdComponent },
{ path: 'details/:id', component: BirdDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
