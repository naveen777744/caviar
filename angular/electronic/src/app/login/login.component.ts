import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { from, Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { environment } from '/Users/naveenbaskar/angular/electronic/src/ environments/environment';
import firebase from "node_modules/firebase/compat";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  emailId: any;
  password: any;
  Product: any;
  siteKey: string = "6LdO1e4jAAAAAKWXGx6VT2TIc1h2UVOLuWgyBsbV";
  employee: any;
  product: any;
  userForm !: FormGroup;
  emailid:any;
  pass:any;
  emailver: any;
  otp: any;

 
 

  //Dependency Injection for EmpService
  constructor(private service: EmpService,  private toastr:ToastrService, private router: Router, private fb : FormBuilder) {
    this.emailId = "";
    this.password = "";
    // this.employees = [
    //   {empId:101, empName:'Harsha',    salary:4545.45, gender:'M', doj:'06-25-2018', country:'IND', emailId:'harsha@gmail.com',    password:'password'},
    //   {empId:102, empName:'Pasha',     salary:5454.54, gender:'M', doj:'07-26-2017', country:'IND', emailId:'pasha@gmail.com',     password:'password'},
    //   {empId:103, empName:'Indira',    salary:5656.56, gender:'F', doj:'08-27-2016', country:'IND', emailId:'indira@gmail.com',    password:'password'},
    //   {empId:104, empName:'Venkat',    salary:6565.65, gender:'M', doj:'09-28-2015', country:'IND', emailId:'venkat@gmail.com',    password:'password'},
    //   {empId:105, empName:'Aldrin',    salary:6767.67, gender:'M', doj:'10-29-2013', country:'IND', emailId:'aldrin@gmail.com',    password:'password'},
    //   {empId:106, empName:'Manjunatha', salary:7676.76, gender:'M', doj:'11-30-2012', country:'IND', emailId:'manjunatha@gmail.com', password:'password'}
    // ];

  }
  ngOnInit(): void {

    this.userForm = this.fb.group({
      'emailId' : new FormControl('', [Validators.required, Validators.email]),
      'password' : new FormControl('',[
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
       ]),
      'recaptcha': ['', Validators.required]
      }
    );

   
      

  }


  // otp_verify.sendOTP(
  //   {
  //     to: "xyz@gmail.com",
  //     message: "Enter the below OTP for email validation",
  //     subject: "Email Verification",
  //   },
  //   (err, otp) => {
  //     if (err) console.log(err);
  //     else console.log("Email sent", otp);
  //   }
  // );

  

  loginSubmit(loginForm: any) {
    console.log(this.user);
    this.service.empLogin(this.user).subscribe(data => {

      
// if(loginForm.otp == this.otp){
      if(data != null){
        
         
          this.service.setUserLoggedIn();
          this.router.navigate(['/product']);
          localStorage.setItem("emailId", JSON.stringify(loginForm.emailId));

          }
    
    else
        {
          this.toastr.error("login failure");
        }
      
  }
// // else{
// //   alert("incorrect otp");
// // }
//     }
     );
    
    //   this.service.empLogin(loginForm).subscribe(data => 
        
    //       this.product=data

        
    //   );

    //   if (this.product != null) {
    //     this.service.setUserLoggedIn();
    //     this.toastr.success("login success");
    //     this.router.navigate(['/product']);
    //     localStorage.setItem("emailId", JSON.stringify(loginForm.emailId));
    // } else {
    //   alert('Login Failed!');
    // }

      // this.employees.forEach((element: any) => {
      //   if(loginForm.emailId == element.emailId && loginForm.password == element.password) {      
      //     this.service.setUserLoggedIn();
      //     this.router.navigate(['products']);

      //     localStorage.setItem("emailId", JSON.stringify(loginForm.emailId));
      //   }
      // });

    
  }

  // reveal(loginForm: any):any{

  //   if(loginForm.valid){
  //     return loginForm.valid
  //   }

  //   else{
  //     return !loginForm.valid
  //   }
        
  // }
  // otp_verify = require("otp-verify");
  // func(){
  //   this.otp_verify.sendOTP(
  //     {
  //       to: this.user.emailId,
  //       message: "Enter the below OTP for email validation",
  //       subject: "Email Verification",
  //     },
  //     (err: any, otp: any) => {
  //       if (err) console.log(err);
  //       else 
  //       {
  //         console.log("Email sent", otp);
  //         this.otp = otp;
  //       }
  //     }
  //   );
  // }

otplogin(){
  this.router.navigate(['/otplogin']);
}

}
