import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  cart : any;


  constructor(private service: EmpService) { 
    this.cart = [];

    this.products = [
      {id: 1, name:'Iphone 14', price:'254999.00', 
      image : 'assets/images/one.png',
      description:' a perfect gift for the true connoisseur of style and gloss!',count:1,tot:1},

      {id: 2, name:'AirPods 3',      price:'84999.00', 
      image : 'assets/images/two.png',
      description:'An exclusive luxury-class model of Airpods Pro.',count:1,tot:1},
      
      {id: 3, name:'Playstation 5 Gold',    price:'169999.00', 
      image : 'assets/images/three.png',
      description:'a special dimension of design and deliberate luxury.',count:1,tot:1},

      {id: 4, name:'Samsung Zfold3',    price:'134999.00', 
      image : 'assets/images/four.png',
      description:'the Ragnarok model is presented with a brutal skull framed by flames.',count:1,tot:1},

      {id: 5, name:'Space sneakers',    price:'67899.00', 
      image : 'assets/images/five.png',
      description:'Extraordinary in its uniqueness and originality.',count:1,tot:1},

      {id: 6, name:'Tourbillon Watch',  price:'564999.00', 
      image : 'assets/images/six.png',
      description:'the functionality embodied in the classic form.',count:1,tot:1},

      {id: 7, name:'Victory Carbon iPad', price:'10999.00', 
      image : 'assets/images/seven.png',
      description:'A brutal accessory for real men performed in the best of classic style.',count:1,tot:1},

      {id: 8, name:'Golden ball Fifa Qatar',      price:'799999.00', 
      image : 'assets/images/eight.png',
      description:'you will like football as much as Caviar.',count:1,tot:1},

      {id: 9, name:'AirPods Pro 2',    price:'139999.00', 
      image : 'assets/images/nine.png',
      description:'Own a piece of Dubai with the new Caviar accessory.',count:1,tot:1},

      {id: 10, name:'Caviar leather case',    price:'25999.00', 
      image : 'assets/images/ten.png',
      description:'Black leather of fine embossing and gold decorative elements.',count:1,tot:1},

      {id: 11, name:'Elon musk bust',    price:'356899.00', 
      image : 'assets/images/11.png',
      description:'set on a solid granite base with inscription of Elon Musk.',count:1,tot:1},

      {id: 12, name:'AirTag',  price:'176999.00', 
      image : 'assets/images/12.png',
      description:'Enjoy life surrounded by gold and diamonds.',count:1,tot:1}
    ];

    
  }

  ngOnInit(): void {
    
    // this.nextslide();
    // this.previousslide();
    
  }


  
  
  addcart(product : any) {
    this.service.addToCart(product);
    this.service.addCount();
    // this.cart.push(product);
    // localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }
 
}
