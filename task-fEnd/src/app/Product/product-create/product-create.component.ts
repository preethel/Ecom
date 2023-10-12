import { Component } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  constructor(private productService: ProductService) {}
  product = {
    id : 0,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    photoUrl: ''
  };

  
  onFileSelected(event: any) {
    this.product.photoUrl = event.target.files[0];
  }

  submitProduct() {
    let reqProduct : IProduct ={
      id : this.product.id,
      title : this.product.title,
      description : this.product.description,
      price : this.product.price,
      quantity : this.product.quantity,
      photoUrl : this.product.photoUrl
    }
    // Handle the product submission here, you can use a service to send data to a server or store it in your application.
    console.log(this.product);
    this.productService.postProduct(reqProduct).subscribe(
      (response) => {
        console.log('Product inserted successfully:', response);
        // You can perform further actions here, such as displaying a success message.
      },
      (error) => {
        console.error('Error inserting product:', error);
        // Handle the error as needed (e.g., show an error message).
      }
    );
  }
}
