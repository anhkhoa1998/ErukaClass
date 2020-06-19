import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './containers/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './containers/sign-up-page/sign-up-page.component';


const routes: Routes = [
  {
    path:'asd',
    component: SignInPageComponent,
  },
  {
    path:'sign-up',
    component: SignUpPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }