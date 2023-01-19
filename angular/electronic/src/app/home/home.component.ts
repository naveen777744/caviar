import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: any;

  constructor(public router:Router,
    public activatedRoute:ActivatedRoute) { 

      this.images = [
        {
        image : 'https://caviar.global/_images/27958/1649125873.png',
        },
  
        {
        image : 'https://caviar.global/_images/27709/1619203942.png',
        },
        
        {
        image : 'https://caviar.global/_images/27797/1633370661.png',
        },
  
        {
        image : 'https://caviar.global/_images/27774/1627910906.png',
        },
  
        { 
        image : 'https://caviar.global/_images/27478/1618961074.png',
        },
  
        {
        image : 'https://caviar.global/_images/27201/1618788951.png',
        },
  
        {
        image : 'https://caviar.global/_images/27434/1618885849.png',
        },
  
        {
        image : 'https://caviar.global/_images/28158/1670784995.png',
        },
  
        { 
        image : 'https://caviar.global/_images/28007/1661803755.png',
        },
  
        {
        image : 'https://caviar.global/_images/27267/1618985036.png?1623998822',
        },
  
        {
        image : 'https://caviar.global/_images/27823/1634308146.png',
        },
  
        { 
        image : 'https://caviar.global/_images/28006/1661802857.png',
        }]
      ;
  
      

    }

  ngOnInit(): void {
  }
  admin(){
    this.router.navigateByUrl("/admin")
  }
  //user(){
  //   this.router.navigateByUrl("/user")
  // }

  
  
}
