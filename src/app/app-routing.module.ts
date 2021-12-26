import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './views/edit-user/edit-user.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { UsersFormComponent } from './views/users-form/users-form.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  // {path:'',component:UsersFormComponent},
  {path:'',component:UsersComponent},
  {path:'singleUser/:id',component:SingleUserComponent},
  {path:'editUser/:id',component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
