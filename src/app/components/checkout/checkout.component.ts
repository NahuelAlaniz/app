import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Productmodelsinterface } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, NavbarComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: Productmodelsinterface[] = [];

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.checkoutForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: ['', Validators.required]
    });

    this.cartItems = this.cartService.getCarrito();
  }

  ngOnInit(): void {
    // 🔥 Restaurar el scroll al abrir el checkout
    document.body.style.overflow = 'auto';
  }

  getCantidad(id: number): number {
    return this.cartService.getCantidad(id);
  }

  get total() {
    return this.cartService.getTotal();
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const cliente = this.checkoutForm.value;
      const productos = this.cartItems.map(p => {
        const cantidad = this.getCantidad(p.id);
        return `${cantidad} x ${p.name} (${p.size}) - ${p.description} - $${(p.price * cantidad).toFixed(2)}`;
      }).join('\n');

      const total = this.total.toFixed(2);

      const mensaje = `🛒 *Nuevo pedido desde la tienda online*\n\n` +
        `👤 *Nombre:* ${cliente.nombre}\n` +
        `📧 *Email:* ${cliente.email}\n` +
        `🏠 *Dirección:* ${cliente.direccion}, ${cliente.ciudad} - CP: ${cliente.codigoPostal}\n\n` +
        `📦 *Productos:*\n${productos}\n\n` +
        `💵 *Total:* $${total}`;

      const mensajeCodificado = encodeURIComponent(mensaje);
      const numeroWhatsApp = '2994273573';
      const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;

      window.open(url, '_blank');

      alert('Redirigiendo a WhatsApp...');
      this.checkoutForm.reset();
    }
  }
}