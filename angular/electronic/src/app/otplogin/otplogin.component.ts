import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { ToastrService } from 'ngx-toastr';
import { from, Observable } from 'rxjs';
import { environment } from '/Users/naveenbaskar/angular/electronic/src/ environments/environment';
import firebase from "node_modules/firebase/compat";
import { User } from '../user';
import { AngularFireAuth } from '@angular/fire/compat/auth';


export class PhoneNumber {
  country!: string;
  area!: string;
  prefix!: string;
  line!: string;

  get e164() {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`
  }

  get phoneNo(){

    const num = this.country + this.area + this.prefix + this.line;
    return num;

  }

}

@Component({
  selector: 'app-otplogin',
  templateUrl: './otplogin.component.html',
  styleUrls: ['./otplogin.component.css']
})
export class OtploginComponent implements OnInit{

  constructor(private service: EmpService,  private toastr:ToastrService, private router: Router, public afAuth: AngularFireAuth){}
  
  ngOnInit(): void {
    
    this.windowRef = this.service.windowRef;
    const new_fire = firebase.initializeApp(environment.firebase)
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': function (response: any) {
        console.log(response);
      }
    });
    this.windowRef.recaptchaVerifier.render();

    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.router.navigate(['/product']);
    //   } else {
    //     alert("incorrect otp");
    //   }
    // });


  }

  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode!: string;
  user: any;

  sendLoginCode() {
    console.log(this.phoneNumber)

    this.service.empotplogin(this.phoneNumber.phoneNo).subscribe(data => {
    
      if(data != null){

        debugger;
        const appVerifier = this.windowRef.recaptchaVerifier;
        const num = this.phoneNumber.e164;
        firebase.auth().signInWithPhoneNumber(num, appVerifier)
          .then((result: any) => {
            this.windowRef.confirmationResult = result;
        })
        .catch((error: any) => console.log(error));

      }
      else{
        alert("phone number not registered")
      }
  });
}

  verifyLoginCode() {

   
    debugger;
    this.router.navigate(['/product'])
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then((result: { user: User; }) => {
        this.user = result.user;
      })
      .catch((error: any) => console.log(error, "Incorrect code entered?"))
  }

  redirectToProduct(){
    this.service.setUserLoggedIn();
    this.router.navigate(['/product']);
  }
 
 

}
