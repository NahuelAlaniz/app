import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Productmodelsinterface } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

declare var bootstrap: any;


@Component({
  selector: 'app-jovenes',
  imports: [FooterComponent, NavbarComponent, CommonModule, RouterLink],
  templateUrl: './boxers.component.html',
  styleUrl: './boxers.component.css',
})
export class BoxersComponent {

  productslistservice: Productmodelsinterface[] = [];

  filteredProducts: Productmodelsinterface[] = [];

  selectedCategory: string | null = null;

  selectedSize: string | null = null;

  selectedProduct: Productmodelsinterface | null = null;

  productQuantitiesOffCanvas: { [productId: number]: number } = {};

  carritoffcanvas: Productmodelsinterface[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    public cartService: CartService
  ) { }

  selectProduct(product: Productmodelsinterface): void {
    this.selectedProduct = product;
  }

  ngOnInit(): void {
    this.productslistservice = this.productService
      .getProducts()
      .filter((product: { category: string }) =>
        ['adulto', 'niño'].includes(product.category)
      );
    this.filteredProducts = [...this.productslistservice];
  }


  applyFilters(): void {
    this.filteredProducts = this.productslistservice.filter((product) => {
      const matchCategory = this.selectedCategory
        ? product.category === this.selectedCategory
        : true;
      const matchSize = this.selectedSize
        ? product.size === this.selectedSize
        : true;
      return matchCategory && matchSize;
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  filterBySize(size: string): void {
    this.selectedSize = size;
    this.applyFilters();
  }

  showAll(): void {
    this.selectedCategory = null;
    this.selectedSize = null;
    this.filteredProducts = [...this.productslistservice];
  }



  decrement(productId: number) {
    if (this.productQuantitiesOffCanvas[productId] > 1) {
      this.productQuantitiesOffCanvas[productId]--;
    }
  }

  increment(productId: number) {
    if (!this.productQuantitiesOffCanvas[productId]) {
      this.productQuantitiesOffCanvas[productId] = 1;
    }
    this.productQuantitiesOffCanvas[productId]++;
  }


  agregarAlCarritoffcanvas(producto: Productmodelsinterface) {
    const yaExiste = this.carritoffcanvas.find((p) => p.id === producto.id);
    if (!yaExiste) {
      this.cartService.agregarProducto(producto);
    }
  }


  goToDetail() {
    if (this.selectedProduct) {
      this.router.navigate(['/detail', this.selectedProduct.id]);
    }
  }

  getQuantity(productId: number): number {
    return this.productQuantitiesOffCanvas[productId] || 1;
  }

  eliminarDelCarrito(productId: number) {
    this.cartService.eliminarDelCarrito(productId);
  }


  getTotalCarrito(): number {
    return this.carritoffcanvas.reduce((total, producto) => {
      const cantidad = this.getQuantity(producto.id);
      return total + producto.price * cantidad;
    }, 0);
  }
}
