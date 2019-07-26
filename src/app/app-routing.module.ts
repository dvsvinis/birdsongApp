import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdComponent } from './bird/bird.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdFormComponent } from './bird-form/bird-form.component';

const routes: Routes = [
{ path: '', component: BirdComponent },
{ path: 'birds', component: BirdListComponent },
  { path: 'addbird', component: BirdFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
