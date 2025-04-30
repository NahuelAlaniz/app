import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Productmodelsinterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-mujeres',
  imports: [
    FooterComponent,
    NavbarComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {

  product!: Productmodelsinterface | undefined;
  selectedProduct: Productmodelsinterface | null = null;
  carritoffcanvas: Productmodelsinterface[] = [];
  filteredProducts: Productmodelsinterface[] = [];
  productQuantitiesOffCanvas: { [productId: number]: number } = {};




  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public cartService: CartService,

  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
    if (!this.product) {
      // Manejo de error si no se encuentra el producto
      console.error('Producto no encontrado');
    }
  }


  agregarAlCarritoffcanvas(producto: Productmodelsinterface) {
    this.cartService.agregarProducto(producto);
  }

  eliminarDelCarrito(productId: number): void {
    const productoEnCarrito = this.cartService.getCarrito().find(p => p.id === productId);

    if (productoEnCarrito) {
      // Devolver la cantidad al stock del producto original
      const productoOriginal = this.filteredProducts.find(p => p.id === productId);
      if (productoOriginal) {
        productoOriginal.stock += productoEnCarrito.cantidad;
      }

      this.cartService.eliminarDelCarrito(productId);
    }
  }

  getQuantity(productId: number): number {
    return this.productQuantitiesOffCanvas[productId] || 1;
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

  buyProduct(product: Productmodelsinterface): void {
    if (product.stock > 0) {
      // 1. Agrego al carrito
      this.cartService.agregarProducto(product);

      // 2. Actualizo stock localmente (y en servicio si querés persistencia)
      this.productService.updateStock(product.id, 1);

      // 3. Actualizo la lista local para que el cambio se refleje en la vista
      product.stock -= 1;
    }
  }


}
