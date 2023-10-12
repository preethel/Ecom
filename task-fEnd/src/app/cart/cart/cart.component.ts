import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from 'src/app/product/IProduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  pageSize = 5;
  pageIndex = 0;
  totalProducts = 0;
  constructor(private cartService: CartService) {}

  carts: { count: number; _product: IProduct }[] = [];

  ngOnInit(): void {
    this.carts = this.cartService.getCart();
  }
  handlePageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  clear(): void {
    this.cartService.clear();
    this.carts = [];
  }
  delete(product: IProduct): void {
    const index = this.carts.findIndex(
      (item) => item._product.id === product.id
    );

    if (index !== -1) {
      this.carts[index].count--;

      if (this.carts[index].count === 0) {
        this.carts.splice(index, 1);
      }
      this.cartService.updateCart(this.carts);
    }
  }

  placeOrder(): void {}
}
