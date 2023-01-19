import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OtploginComponent } from './otplogin/otplogin.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:"login", component:LoginComponent},
  {path :"register", component:RegisterComponent},
  {path :"home", component:HomeComponent},
  {path:'product', canActivate:[AuthGuard], component:ProductComponent} ,
  {path:'cart', canActivate:[AuthGuard], component:CartComponent} ,
  {path:'logout', canActivate:[AuthGuard], component:LogoutComponent},
  {path:'success', component:SuccessComponent},
  {path:'otplogin',component:OtploginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
