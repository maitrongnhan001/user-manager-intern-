import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: '', component: ListUserComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'edit/:index', component: UpdateUserComponent }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
