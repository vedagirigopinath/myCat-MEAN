import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


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
  
  //server side pagination
  previous: any;
  next: any;
  current: any = 1;

  //sorting var
  sortoption= '';

  //filter variable
  manufacturers = [{ 'id': 'Samsung', 'checked': false },
                   { 'id': 'Microsoft', 'checked': false },
                   { 'id': 'Apple', 'checked': false },
                   { 'id': 'Micromax', 'checked': false }];

    os = [{ 'id': 'Android', 'checked': false },
          { 'id': 'Windows', 'checked': false },
          { 'id': 'iOS', 'checked': false }];

    price_range = [{ 'id': '3000-5000', 'checked': false },
                   { 'id': '13000-15000', 'checked': false },
                   { 'id': '19000-35000', 'checked': false },
                   { 'id': '40000-70000', 'checked': false }];

    checkedManufacturers: any[];
    checkedOS: any[];
    checkedPrice: any[];
    chkmanosprice: any = [];

  previousPage()
  {
      if(this.current == 0 || this.current < 0){
        this.current = 1;
        this.loadProducts(this.current);
      }else {
        this.previous= this.current;
        this.current--;
        this.loadProducts(this.previous);
      }
  }

  nextPage(){
      if(this.current == 0 || this.current >= 10){ // checks for page not less than 0 or page limit not exists 10 || 100
        this.current = 1;
        this.loadProducts(this.current);
      } 
      else if(this.current == 1 ){
        this.current++;
        this.next = this.current;
        this.loadProducts(this.next);
      }
      else{
        this.next= this.current+1;
        this.loadProducts(this.next);
        this.current++;
      }

  }

  
  constructor(private authService: AuthService ) {

    this.loadProducts(1);
    
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
/* Working code This below code fetch all the data from Database
----------------------------------------------------------------
     this.authService.getProducts().subscribe( data =>{
      if(data){
        console.log("Found data " + data);
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
    }); */
  }


  loadProducts(pageNumber){
    this.authService.getProductByQuery(pageNumber)
      .subscribe( products =>{
      this.authService.Products = products; // getting values form serive(getProducts function) and store it back in service Array variable
      this.products = this.authService.Products; // storing values in local Arr arr(producrs) which is feteched from service(Produts Array variable)
    });

      /*this.authService.getProducts()
        .subscribe( products => {
          this.authService.Products = products; // getting values form serive(getProducts function) and store it back in service Array variable
          this.products = this.authService.Products; // storing values in local Arr arr(producrs) which is feteched from service(Produts Array variable)
        });*/
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

  onChange(value: any){
    this.sortoption = value;
  }

  filter(name: any) {
    let checkedProducts: any[];
    let chkman: any = [];
    let chkmanos: any = [];
    this.chkmanosprice = [];
    
    const index = 0;
    checkedProducts = this.authService.Products;
    name.checked = (name.checked) ? false : true;

    this.checkedManufacturers = this.manufacturers.filter(product => product.checked).map(product => product.id);

    this.checkedOS = this.os.filter(product => product.checked).map(product => product.id);

    this.checkedPrice = this.price_range.filter(product => product.checked).map(product => product.id);

    if (this.checkedManufacturers.length > 0) {
        for (let i = 0; i < this.checkedManufacturers.length; i++) {
            for (let j = 0; j < checkedProducts.length; j++) {
                if (checkedProducts[j].manufacturer.toLowerCase() === this.checkedManufacturers[i].toLowerCase()) {
                    chkman.push(checkedProducts[j]);
                }
            }
        }
    } else {
        chkman = checkedProducts;
    }
    if (this.checkedOS.length > 0) {
        for (let i = 0; i < this.checkedOS.length; i++) {
            for (let j = 0; j < chkman.length; j++) {
                if (chkman[j].ostype.toLowerCase() === this.checkedOS[i].toLowerCase()) {
                    chkmanos.push(chkman[j]);
                }
            }
        }
    } else {
        chkmanos = chkman;
    }
    if (this.checkedPrice.length > 0) {
        for (let i = 0; i < this.checkedPrice.length; i++) {
            for (let j = 0; j < chkmanos.length; j++) {
                if (this.checkedPrice[i] === '3000-5000') {
                    if (chkmanos[j].price >= 3000 && chkmanos[j].price <= 5000) {
                        this.chkmanosprice.push(chkmanos[j]);
                    }
                }
                if (this.checkedPrice[i] === '13000-15000') {
                    if (chkmanos[j].price > 13000 && chkmanos[j].price <= 15000) {
                        this.chkmanosprice.push(chkmanos[j]);
                    }
                }
                if (this.checkedPrice[i] === '19000-35000') {
                    if (chkmanos[j].price > 19000 && chkmanos[j].price <= 35000) {
                        this.chkmanosprice.push(chkmanos[j]);
                    }
                }
                if (this.checkedPrice[i] === '40000-70000') {
                    if (chkmanos[j].price > 40000 && chkmanos[j].price <= 70000) {
                        this.chkmanosprice.push(chkmanos[j]);
                    }
                }
            }
        }
    } else {
        this.chkmanosprice = chkmanos;
    }

    this.products = [];
    this.products = this.chkmanosprice;
}

}
