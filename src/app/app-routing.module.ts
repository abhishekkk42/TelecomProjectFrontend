import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { MyplansComponent } from './myplans/myplans.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"plans", component:PlansComponent},
  {path:"myplans", component:MyplansComponent},
  {path:"myprofile", component:MyprofileComponent},
  {path:"signup", component:SignupComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
