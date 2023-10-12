import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { IProduct } from 'src/app/product/IProduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  carts: { count: number; _product: IProduct }[] = [];

  constructor(private cartService: CartService) {}
  public totalPrice: number = 0;
  ngOnInit(): void {
    // Fetch cart data from the service, consider using a try-catch block for error handling
    try {
      this.carts = this.cartService.getCart();
      console.log('order', this.carts);
    } catch (error) {
      console.error('Error fetching cart data:', error);
      // Handle the error as needed (e.g., show an error message to the user)
    }
  }
  getTotalPrice():number{
    return     this.totalPrice = this.carts.reduce((total, item) => {
      const itemPrice = item.count * item._product.price;
      return total + itemPrice;
    }, 0);
  }
}
