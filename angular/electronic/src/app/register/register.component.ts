import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpService } from '../emp.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countries: any;
  registerInfo: any;
  userForm !: FormGroup;
  isDisabled: boolean = false;
  siteKey: string = "6LdO1e4jAAAAAKWXGx6VT2TIc1h2UVOLuWgyBsbV";

  constructor(private service: EmpService, private toastr:ToastrService, private fb : FormBuilder, private router: Router) {
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
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data; console.log(data);});
    this.userForm = this.fb.group({
      'name' : new FormControl('', Validators.required),
      'gender' : new FormControl('', Validators.required),
      'country' : new FormControl('', Validators.required),
      'emailId' : new FormControl('', [Validators.required, Validators.email]),
      'password' : new FormControl('',[
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
       ]),
      'cpassword' : new FormControl('', Validators.required),
      'cb': [false, Validators.requiredTrue],
      'recaptcha': ['', Validators.required],
      'phoneno' : new FormControl('', Validators.required)
      }
    );
   }

   getControl(name: any): AbstractControl | null {

    return this.userForm.get(name)

  }

 
   
   register() {
    //this.employees.push(regForm);
    // console.log(this.employees);
   
    
    console.log(this.userForm);
   
    this.service.registerprod(this.userForm.value).subscribe(data =>{

      if(data != null){
        
        this.toastr.success("Registration success");
        this.router.navigate(['/login']);
        
  }
  else
      {
        this.toastr.error("user already exists/register failure");
      }

    });
   
   }

 

}
