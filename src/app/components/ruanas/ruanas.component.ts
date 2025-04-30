import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Productmodelsinterface } from '../../models/product.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../../services/cart.service';
declare var bootstrap: any;


@Component({
  selector: 'app-jerseys',
  imports: [NavbarComponent, RouterLink, CommonModule, FooterComponent],
  templateUrl: './ruanas.component.html',
  styleUrl: './ruanas.component.css'
})
export class RuanasComponent {

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
        ['sacos', 'ruanas', 'sweaters'].includes(product.category)
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
    this.cartService.decrementarCantidad(productId);
  }

  increment(productId: number) {
    this.cartService.incrementarCantidad(productId);
  }


  agregarAlCarritoffcanvas(producto: Productmodelsinterface) {
    this.cartService.agregarProducto(producto);
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

  cerrarOffcanvas() {
    const offcanvasElement = document.getElementById('offcanvasRight');
    if (offcanvasElement) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  }
}
