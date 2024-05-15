import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUsersComponent } from './Components/get-all-users/get-all-users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' }, // Redirect empty path to users
  { path: 'users', component: GetAllUsersComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }