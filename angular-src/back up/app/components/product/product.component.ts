import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:any = [];
  id: any = '';
  constructor(private route: ActivatedRoute, private router: Router,private authService: AuthService)
    {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);  
    }

  ngOnInit() {
    /* this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
	
	  this.id = '5b62c6681e2cc0c01ddbeb37';
	  console.log(this.id); */
    //this.product = this.authService.getProduct.filter((product: any) => product.productId === this.id)[0];

    this.authService.getProduct(this.id).subscribe( data =>{
      if(data){
        console.log("Found data " + data);
		
        this.product.push(data);
        //this.product.push(data[0]);
        
		//data.forEach(element => {
        //  this.product.push(element);
        //});
        
        console.log("Product details "+this.product);
        
      }else{
        console.log('No Product details in DB');
        this.product.push({
          "title": 'One post',
          "description": 'Test data'
        });
      }
    });
  }

}
