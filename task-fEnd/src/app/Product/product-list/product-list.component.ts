import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CartService } from '../../cart/cart.service';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  displayedColumns: string[] = ['title', 'price', 'description', 'quantity','photoUrl'];
  Products: IProduct[] = [];

  pageSize = 5;
  pageIndex = 0;
  totalProducts = 0;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.Products = data;
      this.totalProducts = data.length; // Calculate the total number of products.
    });
  }
  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }
  handlePageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  deleteProduct(product: IProduct): void {
    this.productService.deleteProduct(product.id).subscribe((data) => {
      console.log(data);
      if (data == 1) {
        // Filter the product out of the array based on its id
        this.Products = this.Products.filter((item) => item.id !== product.id);
      }
    });
  }
  
}
