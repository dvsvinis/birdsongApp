import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdComponent } from './bird/bird.component';
import { AddBirdComponent } from './add-bird/add-bird.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGoodService } from './service/auth-good.service';

const routes: Routes = [
  { path: '', component: BirdComponent, canActivate: [AuthGoodService] },
  { path: 'addbird', component: AddBirdComponent, canActivate: [AuthGoodService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGoodService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
