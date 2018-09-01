import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    selectedProducts: any = [];
    imageWidth = 50;
    imageMargin = 2;
    grandTotal: any = 0;
    quantity: any = 0;
    submit: boolean;

   chect = [{"orderId":"ORD_1",
   "_id":"5b852c33f03253d25dd2003c",
   "userId":"gopinath",
   "productName":"Oranges - Navel, 72",
   "price":1465,
   "quantity":1,
   "dateOfPurchase":"Wed Aug 29 2018 17:22:19 GMT+0530 (India Standard Time)",
   "totalPrice":1465}];

  constructor(private authService: AuthService,
    private _route: ActivatedRoute, private _router: Router) {
      this.selectedProducts = this.authService.selectedProducts;
      for(let i=0; i< this.selectedProducts.length; i++){
        this.grandTotal += this.selectedProducts[i].totalPrice;
        this.quantity += this.selectedProducts[i].quantity;
      }
      sessionStorage.setItem('grandTotal', this.grandTotal);
      sessionStorage.setItem('selectedItems', this.quantity);
      console.log(this.authService.selectedProducts);
     }

  ngOnInit() {

  }

  updateCart(product: any){
    product.totalPrice = product.price * product.quantity;
    this.grandTotal = 0;
    this.quantity = 0;
    for(let i = 0; i < this.selectedProducts.length; i++){
      this.grandTotal += this.selectedProducts[i].totalPrice;
      this.quantity += this.selectedProducts[i].quantity;
    }
      sessionStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
      sessionStorage.setItem('grandTotal', this.grandTotal);
      sessionStorage.setItem('selectedItems', this.quantity);

      console.log('updated');
  }

    remove(index: number) {
        this.selectedProducts.splice(index, 1);
        this.grandTotal = 0;

        this.quantity = 0;
        for (let i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
    }

    onBack(): void {
        this._router.navigate(['/dashboard']);
        console.log(this.selectedProducts._id);
    }

    checkout() {
        this.submit = false;
        this.authService.selectedProducts = [];
        sessionStorage.removeItem('selectedProducts');
        alert('Order placed successfully, Thanks');
        this._router.navigate(['/']);
    }

    gotoProducts() {
        sessionStorage.removeItem('grandTotal');
        sessionStorage.removeItem('selectedItems');
        this._router.navigate(['/dashboard']);
    }

}
