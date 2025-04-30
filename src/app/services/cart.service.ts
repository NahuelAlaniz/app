import { Injectable } from '@angular/core';
import { Productmodelsinterface } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service'; // Asegúrate de importar el servicio

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private carrito: Productmodelsinterface[] = [];
  private cantidades: { [id: number]: number } = {};

  constructor(
    private http: HttpClient,
    private productService: ProductService // Inyectar ProductService aquí
  ) { }

  getCarrito(): Productmodelsinterface[] {
    return this.carrito;
  }

  getCantidad(id: number): number {
    return this.cantidades[id] || 1;
  }

  agregarProducto(producto: Productmodelsinterface) {
    const yaExiste = this.carrito.find(p => p.id === producto.id);
    if (!yaExiste) {
      this.carrito.push(producto);
      this.cantidades[producto.id] = 1;
    } else {
      this.incrementarCantidad(producto.id);
    }
  }

  incrementarCantidad(id: number) {
    const producto = this.carrito.find(p => p.id === id);
    if (producto && producto.stock > 0) {
      this.cantidades[id]++;
      producto.stock--;  // Resta un producto al stock

      // Enviar al servidor para actualizar el stock
      this.http.post('api/productos/actualizar-stock', { id, stock: producto.stock }).subscribe(response => {
        console.log('Stock actualizado en el servidor', response);
      });
    }
  }

  decrementarCantidad(id: number) {
    const producto = this.carrito.find(p => p.id === id);
    if (this.cantidades[id] > 1) {
      this.cantidades[id]--;
      if (producto) {
        producto.stock++; // Vuelve a agregar un producto al stock cuando se decrementa la cantidad
      }
    }
  }

  eliminarDelCarrito(id: number) {
    const producto = this.carrito.find(p => p.id === id);
    if (producto) {
      // Actualizar el stock del servidor
      this.http.post('api/productos/actualizar-stock', { id, stock: producto.stock + this.cantidades[id] }).subscribe(response => {
        console.log('Stock actualizado en el servidor', response);
      });

      // Eliminar el producto del carrito
      this.carrito = this.carrito.filter(p => p.id !== id);
      delete this.cantidades[id];
    }
  }

  getTotal(): number {
    return this.carrito.reduce((total, p) => total + p.price * this.getCantidad(p.id), 0);
  }

  // Ejemplo de cómo usar ProductService dentro de CartService
  obtenerProductoPorId(id: number): Productmodelsinterface | undefined {
    return this.productService.getProductById(id);
  }

  eliminarProducto(id: number): void {
    this.carrito = this.carrito.filter(p => p.id !== id);
  }


}
