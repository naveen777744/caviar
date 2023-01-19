import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AngularFireModule  } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SuccessComponent } from './success/success.component';
import { OtploginComponent } from './otplogin/otplogin.component';


const firebaseConfig = {}


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        ProductComponent,
        HomeComponent,
        RegisterComponent,
        LogoutComponent,
        CartComponent,
        SuccessComponent,
        OtploginComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        HttpClientModule,
        NgxCaptchaModule,
        CarouselModule.forRoot(),
        CommonModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule
        ]
})
export class AppModule {}
