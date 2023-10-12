import { Injectable } from '@angular/core';
import { IProduct } from '../product/IProduct';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'shoppingCart'; // Key for localStorage

  constructor() {
    this.carts = JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  private cart: IProduct[] = [];
  private count: number = 1;
  carts: { count: number, _product: IProduct }[] = [];
  addToCart(product: IProduct): void {
    const existingCartItem = this.carts.find((item) => item._product.id === product.id);
    if (existingCartItem) {
      existingCartItem.count += 1;
    } else {
      this.carts.push({ count: this.count++, _product: product });
    }
    this.saveCartToLocalStorage();
  }

  getCart(): any[] {
    return this.carts;
  }
  clear():void{
    localStorage.removeItem(this.cartKey);
  }
  private saveCartToLocalStorage(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.carts));
  }
  updateCart(updatedCart: { count: number, _product: IProduct }[]): void {
    this.carts = updatedCart;
    this.saveCartToLocalStorage();
  }
}
