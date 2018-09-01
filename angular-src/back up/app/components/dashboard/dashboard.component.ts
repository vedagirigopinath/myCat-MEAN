import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products:any = [];
  myCart: any=[];
  
  orderId = 0;
  
  total = 0;
  selectedItems : any = 0

  selectedProducts: any = [];
  grandTotal: any;

  constructor(private authService: AuthService ) { 
    this.authService.getProducts()
      .subscribe( products => {
        this.authService.Products = products; // getting values form serive(getProducts function) and store it back in service Array variable
        this.products = this.authService.Products; // storing values in local Arr arr(producrs) which is feteched from service(Produts Array variable)
      });

   this.orderId++;
      if (authService.selectedProducts.length > 0) {
        this.selectedItems = Number(sessionStorage.getItem('selectedItems'));
        this.total = Number(sessionStorage.getItem('grandTotal'));
      }else{
        console.log('no items in the selected product array');
      }

      this.selectedProducts = this.authService.selectedProducts;
      for (let i = 0; i < this.selectedProducts.length; i++) {
          this.grandTotal += this.selectedProducts[i].totalPrice;
          sessionStorage.setItem('grandTotal', this.grandTotal);
      }
      console.log(this.grandTotal);
      
  }
  
  ngOnInit() {
    this.authService.getProducts().subscribe( data =>{
      if(data){
        console.log("Found data " + data._id);
        //this.products.push(data);
        //this.products.push(data[0]);
        data.forEach(element => {
          this.products.push(element);
        });
        
        //this.products = data;
        
      }else{
        console.log('No Product details in DB');
        this.products.push({
          "title": 'One post',
          "description": 'Test data'
        });
      }
    });
  }
  
  addCart(id: any){
    
  this.selectedItems += 1;
  const product = this.authService.Products.filter( (currProduct: any) => currProduct._id == id)[0];
  console.log('product price',product.price);
  this.total += product.price;
  
	const sp = this.authService.selectedProducts.filter( (currProduct: any) => currProduct._id == id)[0];
  
  
  sessionStorage.setItem('selectedItems', this.selectedItems);
  
  if(sp){
		const index = this.authService.selectedProducts.findIndex( (currProduct: any) => currProduct._id == id);
		this.authService.selectedProducts[index].quantity += 1;
    this.authService.selectedProducts[index].totalPrice += product.price;

	} else{
		this.authService.selectedProducts.push(
			{
				"orderId" : 'ORD_' + this.orderId,
				"_id": id,
				"userId": 'gopinath',
				"productName" : product.productName,
				"price" : product.price,
				"quantity" : 1,
				"dateOfPurchase" : new Date().toString(),
				"totalPrice" : product.price * 1
			}
    );
    console.log('add to cart from else', this.authService.selectedProducts);
    sessionStorage.setItem('selectedProducts', JSON.stringify(this.authService.selectedProducts));
    this.orderId++;

  }
  
  }

}
