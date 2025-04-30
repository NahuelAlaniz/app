import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { conjuntos_bralettes_bodys } from './components/conjuntos_bralettes_bodys/conjuntos_bralettes_bodys';
import { pijamas_camisolines } from './components/pijamas_camisolines/pijamas_camisolines';
import { JovenesComponent } from './components/jovenes/jovenes.component';
import { DetailComponent } from './components/detail/detail.component';
import { RuanasComponent } from './components/ruanas/ruanas.component';
import { VestidosComponent } from './components/vestidos/vestidos.component';
import { RemerasComponent } from './components/remeras/remeras.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { PantalonesComponent } from './components/pantalones/pantalones.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'inicio', component: MainComponent },
    { path: 'conjuntos_bralettes_bodys', component: conjuntos_bralettes_bodys },
    { path: 'pijamas_camisolines', component: pijamas_camisolines },
    { path: 'ropa-jovenes', component: JovenesComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'ruanas', component: RuanasComponent },
    { path: 'vestidos', component: VestidosComponent },
    { path: 'remeras', component: RemerasComponent },
    { path: 'pantalones', component: PantalonesComponent },
    { path: 'checkout', component: CheckoutComponent },


];

NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [CheckoutComponent],
    exports: [RouterModule],
});

export class AppRoutingModule { }
