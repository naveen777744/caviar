import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from './user';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})

export class EmpService {
  cartItems: any;
  // productToBeAdded: any;
  count = 0;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  baseurl = "http://localhost:8085";
  privateurl = "http://localhost:8085/productLogin"
  otpurl = "http://localhost:8085/otpLogin"
  private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  isUserLogged: boolean;
  loginStatus: Subject<any>;

  constructor(private httpClient: HttpClient) {
    this.cartItems = [];
    // this.productToBeAdded = new Subject();
   
    this.isUserLogged = false;
    this.loginStatus = new Subject();
  }

  get nativeWindow() : any {
    return _window();
 }

 get windowRef(){
  return window
}
 
  getAllCountries(): Observable<Object> {
    return this.httpClient.get('https://restcountries.com/v3.1/all');
  }

  public empLogin(user:User):Observable<any> {
    console.log(user);
    return this.httpClient.post<any>(this.privateurl,user);
  }

  empotplogin(number: any){
    return this.httpClient.get(this.otpurl+'/'+number);
  }

  registerprod(emp: any) {
    return this.httpClient.post<any>(this.baseurl+'/registerProduct', emp);
  }


  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  setUserLoggedIn() {
    this.isUserLogged = true;
    this.loginStatus.next(this.isUserLogged);
  }
  
  setUserLoggedOut() {
    this.isUserLogged = false;
    this.loginStatus.next(this.isUserLogged);
  }

  getUserLogged(): boolean {
    return this.isUserLogged;
  }
  
  
  addToCart(product: any) {
    this.cartItems.push(product);
    // this.productToBeAdded.next(product);
  }

  
  // getCartStatus(): any {
    
  //   return this.productToBeAdded.asObservable();
    
  // }
  
  addCount() {
    this.count+=1;
    this.simpleObservable.next(this.count)
  }
  removeCount() {
    if (this.count > 0) { this.count-=1 };
    this.simpleObservable.next(this.count)
  }
  getCount(){
    return this.simpleObservable$;
  }

  zeroCount(){
    this.count=0;
    this.simpleObservable.next(this.count)
  }

getCartItems(){
    return this.totalItems.asObservable();
}

updateCartItems(items: number) {
    this.totalItems.next(items);
}





}