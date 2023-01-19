import { Token } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  data: any;
  cartItems: any=[];
  total: number =0;
  count: any;
  cnti: any;
  cntd: any;
  tp: any;
  i : any;
  
  

  constructor(private service: EmpService, private router: Router){
    this.total = 0;
  }
  
  ngOnInit(): void{
    
    this.cartItems = this.service.cartItems;

    this.cartItems.forEach((product: any) => {
      this.service.getCount();
      this.total += Number(product.price);
      if(this.total>500000){
        alert("maximum amount reached");
        this.cartItems.splice(this.cartItems.indexOf(product),1);
        this.total -= Number(product.price);
        this.service.removeCount();
        this.router.navigate(['/product']);
      }
      
    });
    
    this.service.getCartItems()
            .subscribe(value => {
                this.count = value;
            })
    
    

    
      
  
    
  }
  
  
  options = {
    "key": "rzp_test_qBHTJKPcK6Z0QW",
    "amount": "",
    "currency": "INR",
    "name": "Caviar",
    "description": "Secure Payment",
    "image": "assets/images/logo1.jpg",
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "handler": function (response: any) {
      const event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

rzp1 : any;
pay(){
  this.options.amount = String(this.total * 100);
  this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
  this.rzp1.on('payment.failed', function (response: any) {
    //this.message = "Payment Failed";
    // Todo - store this information in the server
    console.log(response.error.code);
    console.log(response.error.description);
    console.log(response.error.source);
    console.log(response.error.step);
    console.log(response.error.reason);
    console.log(response.error.metadata.order_id);
    console.log(response.error.metadata.payment_id);
    //this.error = response.error.reason;
  }
  );
}
@HostListener('window:payment.success', ['$event'])
onPaymentSuccess(event: any): void {
  this.router.navigate(['/success']);
  this.cartItems.splice(0);
  this.service.zeroCount();
}


  
delete(product: any){
   
    //  let i= this.cartItems.findIndex((element: any) => {
    //    return product.id=element.id;
        
  
  
    //   });
    this.cartItems.splice(this.cartItems.indexOf(product),1);
    this.total -= Number(product.price);
    this.service.removeCount();
   
  
    
  }




}





