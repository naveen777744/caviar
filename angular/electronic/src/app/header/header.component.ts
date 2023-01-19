import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus: any;
  cartItems: any;
  totalItem= 0

  constructor(private service: EmpService, private router: Router) {
    this.cartItems = [];
  }

  ngOnInit(): void {

    // this.serivce.getCartStatus().subscribe((data: any) => {
    //   this.cartItems.push(data);
    //});

    this.service.getLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
    });

    this.service.getCount().subscribe((count: any) => {
      this.totalItem = count
       console.log(count)
      }
      );

  
  }

}
