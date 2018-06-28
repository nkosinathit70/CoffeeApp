import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   quantity:number = 0;
   cream:boolean = false;
   choco:boolean = false;
     price:number =10.0;
     orderName:string;
     addCream:string = "";
    addChoco:string = "";
    add:string;
    showComp = false;
    totPrice:number = 0;
  constructor(public navCtrl: NavController) {

  }
  onClick(x){

    if(x==='a'){
      this.quantity+=1;
    }
    else if(x==='s'){
      this.quantity-=1;
      if(this.quantity < 0)
      {
        this.quantity =0;
      }
    }
    this.totPrice = this.price * this.quantity;
  }

  checkFlavour(x){
     
    if(x ==='w'){
      
      if(this.cream){
        this.addCream="+ Whipped Cream";
              this.price+=2;
              
      }else if(!this.cream){
        this.price-=2;
        this.addCream = "";
      }
    
    }
    else if(x==='c'){
      if(this.choco){
        this.addChoco="+ Chocolate";
              this.price+=5;
              
      }else if(!this.choco){
        this.price-=5;
        this.addChoco = "";
      }

    }
    this.totPrice = this.price * this.quantity;
  
  }

  showComps(){

         if(this.orderName !== "" && this.quantity !== 0){
          this.showComp = true;
        }
        else{
          this.showComp= false;
        }
  }

  reset(){
    this.quantity = 0;
    this.cream= false;
    this.choco= false;
      this.price =10.0;
     this.orderName = "";
      this.addCream= "";
     this.addChoco= "";
     this.add="";
     this.showComp = false;
     this.totPrice= 0;

  }


 
}