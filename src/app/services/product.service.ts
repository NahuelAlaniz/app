import { Injectable } from '@angular/core';
import { Productmodelsinterface } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private productslistservice = [
    //conjunto_bralette_body

    //body talle 85
    {
      id: 1,
      name: 'Body azul marino',
      size: '85',
      category: 'Body',
      image: 'body_azul_85.jpeg',
      description: 'Body de microfibra y puntilla color azul marino',
      price: 1999,
      stock: 1,
      cantidad: 1
    },
    //bralette talle 85
    {
      id: 20,
      name: 'Bralette negro',
      size: '85',
      category: 'Bralette',
      image: 'bralette_negro_detalle_90.jpeg',
      description: 'Bralette con aro negro de tull y puntilla',
      price: 14500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 21,
      name: 'Bralette negro',
      size: '85',
      category: 'Bralette',
      image: 'conjunto_negro_85.jpeg',
      description: 'Bralette de algodón',
      price: 12000,
      stock: 1,
      cantidad: 1
    },
    //bralette talle 90

    {
      id: 40,
      name: 'Bralette negro',
      size: '90',
      category: 'Bralette',
      image: 'bralette_negro_flores_90.jpeg',
      description: 'Bralette de encaje',
      price: 14500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 41,
      name: 'Bralette naranja',
      size: '90',
      category: 'Bralette',
      image: 'bralette_naranja_90.jpeg',
      description: 'Bralette de saten con puntilla',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 42,
      name: 'Bralette fluorecente',
      size: '90',
      category: 'Bralette',
      image: 'bralette_fluorecente_90.jpeg',
      description: 'Bralette morley',
      price: 12000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 43,
      name: 'Bralette blanco',
      size: '90',
      category: 'Bralette',
      image: 'bralette_blanco_90_violeta.jpeg',
      description: 'Bralette de tull y encaje',
      price: 14500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 44,
      name: 'Bralette marino',
      size: '90',
      category: 'Bralette',
      image: 'bralette_marino_90.jpeg',
      description: 'Bralette de encaje',
      price: 13000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 45,
      name: 'Bralette negro',
      size: '90',
      category: 'Bralette',
      image: 'bralette_negro_detalle_90.jpeg',
      description: 'Bralette con aro de tull y encaje',
      price: 14500,
      stock: 1,
      cantidad: 1
    },

    //bralette talle 95
    {
      id: 60,
      name: 'Bralette blanco',
      size: '95',
      category: 'Bralette',
      image: 'bralette_claro_95.jpeg',
      description: 'Bralette con aro con tull y puntilla',
      price: 16000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 61,
      name: 'Bralette naranja',
      size: '95',
      category: 'Bralette',
      image: 'bralette_naranja_95.jpeg',
      description: 'Bralette de puntilla',
      price: 13000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 62,
      name: 'Bralette negro',
      size: '95',
      category: 'Bralette',
      image: 'bralette_negro_95.jpeg',
      description: 'Bralette con aro y puntilla',
      price: 14500,
      stock: 1,
      cantidad: 1
    },
    //bralette talle 100
    {
      id: 70,
      name: 'Bralette rojo',
      size: '100',
      category: 'Bralette',
      image: 'bralette_rojo_100.jpeg',
      description: 'Bralette de tull y puntilla',
      price: 13000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 71,
      name: 'Bralette pardo negro',
      size: '100',
      category: 'Bralette',
      image: 'bralette_pardo_negro_100.jpeg',
      description: 'Bralette de tull print',
      price: 13500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 72,
      name: 'Bralette blanco ',
      size: '100',
      category: 'Bralette',
      image: 'bralette_blanco_100.jpeg',
      description: 'Bralette deportivo de algodón y elástico',
      price: 12000,
      stock: 1,
      cantidad: 1
    },


    //bralette talle 105
    {
      id: 90,
      name: 'Bralette blanco ',
      size: '105',
      category: 'Bralette',
      image: 'bralette_blanco_105.jpeg',
      description: 'Bralette armado de tull y puntilla',
      price: 16000,
      stock: 1,
      cantidad: 1
    },

    //conjunto talle 85
    {
      id: 110,
      name: 'Conjunto rojo',
      size: '85',
      category: 'Conjunto',
      image: 'conjunto_rojo_85.jpeg',
      description: 'Conjunto armado de puntilla y tull',
      price: 15500,
      stock: 1,
      cantidad: 1

    },
    {
      id: 112,
      name: 'Conjunto blanco',
      size: '85',
      category: 'Conjunto',
      image: 'conjunto_blanco_85.jpeg',
      description: 'Conjunto armado de puntilla y tull',
      price: 15500,
      stock: 1,
      cantidad: 1

    },


    //conjunto talle 90

    {
      id: 130,
      name: 'Conjunto pardo',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_pardo_90.jpeg',
      description: 'Conjunto armado de algodon estampado print',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 131,
      name: 'Conjunto gris oscuro',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_gris_oscuro_90.jpeg',
      description: 'Conjunto armado de algodon símil jeans',
      price: 16000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 132,
      name: 'Conjunto negro',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_negro_90.jpeg',
      description: 'Conjunto armado de microfibra',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 133,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90_puntos.jpeg',
      description: 'Conjunto armado de microfibra elaborada',
      price: 19000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 134,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90.jpeg',
      description: 'Conjunto armado de microfibra y encaje',
      price: 18000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 135,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90_estrellas.jpeg',
      description: 'Conjunto armado de algodon estampado estrella',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 136,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90_detalles.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 18000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 137,
      name: 'Conjunto beige',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_beige_90.jpeg',
      description: 'Conjunto armado de algodon y puntilla',
      price: 16000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 138,
      name: 'Conjunto beige',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_beige_90_flores.jpeg',
      description: 'Conjunto armado de microfibra elaborada con vedetina',
      price: 16000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 139,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90_raro.jpeg',
      description: 'Conjunto tripack de puntilla',
      price: 15000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 140,
      name: 'Conjunto rojo',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_rojo_90.jpeg',
      description: 'Conjunto deportivo de algodón',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    //Conjunto talle 95
    {
      id: 160,
      name: 'Conjunto petroleo',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_verde_95.jpeg',
      description: 'Conjunto triangulo taza soft de encaje',
      price: 12000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 161,
      name: 'Conjunto rojo',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_rojo_95.jpeg',
      description: 'Conjunto armado de puntilla y tull',
      price: 15500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 162,
      name: 'Conjunto azul',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_azul_oscuro_95.jpeg',
      description: 'Conjunto armado de algodon símil jeans',
      price: 16000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 163,
      name: 'Conjunto blanco',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_blanco_raro_95.jpeg',
      description: 'Conjunto triangulito taza soft de puntilla',
      price: 18000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 164,
      name: 'Conjunto blanco',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_blanco_95.jpeg',
      description: 'Conjunto tripack de puntilla',
      price: 15000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 165,
      name: 'Conjunto negro',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_negro_95.jpeg',
      description: 'Conjunto tripack de puntilla',
      price: 15000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 166,
      name: 'Conjunto blanco',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_armado_microfibra_encaje_95_18000.jpeg',
      description: 'Conjunto armado microfibra y encaje',
      price: 18000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 167,
      name: 'Conjunto estampado',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_armado_algodon_estampado_estrellas_100_17000.jpeg',
      description: 'Conjunto armado de algodón con estampado de estrellas',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 168,
      name: 'Conjunto rosado estampado',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_armado_algodon_estampado_rosa_95_19000.jpeg',
      description: 'Conjunto armado de algodón con estampado',
      price: 19000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 169,
      name: 'Conjunto rosado',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_armado_microfibra_sublimada_vedetina_de_encaje_print_95_21000.jpeg',
      description: 'Conjunto armado de microfibra sublimada con vedetina de encaje print',
      price: 21000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 170,
      name: 'Conjunto beige',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_armado_microfibra_marron_95_18000.jpeg',
      description: 'Conjunto armado de microfibra',
      price: 18000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 171,
      name: 'Conjunto rojo',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_armado_microfibra_rojo_95_19000.jpeg',
      description: 'Conjunto armado de microfibra',
      price: 19000,
      stock: 1,
      cantidad: 1
    },
    //conjunto talle 100
    {
      id: 190,
      name: 'Conjunto beige',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_beige_100.jpeg',
      description: 'Conjunto armado de microfibra y encaje',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 191,
      name: 'Conjunto rosado',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_rosado_100.jpeg',
      description: 'Conjunto triangulo taza soft de puntilla',
      price: 16000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 192,
      name: 'Conjunto negro',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_negro_100.jpeg',
      description: 'Conjunto triangulo taza soft de puntilla',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 193,
      name: 'Conjunto bordó',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_bordó_100.jpeg',
      description: 'Conjunto armado de puntilla y tul con vedetina',
      price: 20000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 194,
      name: 'Conjunto rojo',
      size: '100',
      category: 'Conjunto',
      image: 'bralette_rojo_falda_100.jpeg',
      description: 'Conjunto tripack de encaje',
      price: 14500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 195,
      name: 'Conjunto beige',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_armado_beige_100.jpeg',
      description: 'Conjunto armado de microfibra y encaje',
      price: 1499,
      stock: 1,
      cantidad: 1
    },
    {
      id: 196,
      name: 'Conjunto estampado',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_armado_algodon_estampado_estrellas_100_17000.jpeg',
      description: 'Conjunto armado de algodón con estampado de estrellas',
      price: 17000,
      stock: 1,
      cantidad: 1
    },

    //conjunto talle 105
    {
      id: 220,
      name: 'Conjunto negro',
      size: '105',
      category: 'Conjunto',
      image: 'conjunto_negro_105.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 19000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 221,
      name: 'Conjunto petroleo',
      size: '105',
      category: 'Conjunto',
      image: 'conjunto_turquesa_105.jpeg',
      description: 'Conjunto triangulo taza soft de puntilla',
      price: 12000,
      stock: 1,
      cantidad: 1
    },
    //conjunto talle 110
    {
      id: 240,
      name: 'Conjunto negro',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_negro_110.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 19000,
      stock: 1,
      cantidad: 1
    },

    {
      id: 241,
      name: 'Conjunto celeste',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_celeste_110.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 18000,
      stock: 1,
      cantidad: 1
    },

    {
      id: 242,
      name: 'Conjunto negro',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_negro_liso_110.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 20000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 243,
      name: 'Conjunto blanco',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_blanco_110.jpeg',
      description: 'Conjunto armado de microfibra',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 244,
      name: 'Conjunto beige',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_armado_microfibra_labrada_encaje_marron_110_19000.jpeg',
      description: 'Conjunto armado de microfibra labrada con encaje',
      price: 19000,
      stock: 1,
      cantidad: 1
    },


    //conjunto talle 115
    {
      id: 260,
      name: 'Conjunto beige',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_beige_115.jpeg',
      description: 'Conjunto armado de algodón y puntilla',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 261,
      name: 'Conjunto verde',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_verde_115.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 19000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 262,
      name: 'Conjunto negro',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_negro_115.jpeg',
      description: 'Conjunto armado de encaje',
      price: 18000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 263,
      name: 'Conjunto salmon',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_rosado_115.jpeg',
      description: 'Conjunto armado de microfibra',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 264,
      name: 'Conjunto estampado negro',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_armado_microfibra_estampado_print_115_21000.jpeg',
      description: 'Conjunto armado de microfibra estampado print',
      price: 21000,
      stock: 1,
      cantidad: 1
    },
    //conjunto talle 120

    {
      id: 290,
      name: 'Conjunto blanco',
      size: '120',
      category: 'Conjunto',
      image: 'conjunto_armado_algodon_puntilla_120_18000.jpeg',
      description: 'Conjunto armado de algodón',
      price: 18000,
      stock: 1,
      cantidad: 1
    },
    //corpiño talle 100
    {
      id: 310,
      name: 'Corpiño negro',
      size: '100',
      category: 'Corpiño',
      image: 'corpiño_mariposa_100.jpeg',
      description: 'Corpiño reductor de algodón',
      price: 12000,
      stock: 1,
      cantidad: 1
    },

    //corpiño talle 105
    {
      id: 330,
      name: 'Corpiño hueso',
      size: '105',
      category: 'Corpiño',
      image: 'corpiño_reductor_hueso_105.jpeg',
      description: 'Corpiño reductor de algodón',
      price: 13000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 331,
      name: 'Corpiño negro',
      size: '105',
      category: 'Corpiño',
      image: 'corpiño_reductor_negro_105.jpeg',
      description: 'Corpiño reductor de algodón',
      price: 13000,
      stock: 1,
      cantidad: 1
    },
    //corpiño talle 110
    {
      id: 350,
      name: 'Corpiño azul',
      size: '110',
      category: 'Corpiño',
      image: 'corpiño_amamantar_110.jpeg',
      description: 'Corpiño de amamantar de algodón',
      price: 12000,
      stock: 1,
      cantidad: 1
    },
    //Parte inferior
    //Vedetinas
    {
      id: 351,
      name: 'Vedetinas',
      size: '85',
      category: 'Parte_inferior',
      image: 'vedetinas_packx3.jpeg',
      description: 'Vedetinas Pack x3 de algodón y puntilla',
      price: 9000,
      stock: 9,
      cantidad: 9
    },
    {
      id: 352,
      name: 'Vedetinas ',
      size: '85',
      category: 'Parte_inferior',
      image: 'vedetinas_pack_algodón.jpeg',
      description: 'Vedetinas Pack x3 de algodón',
      price: 9000,
      stock: 9,
      cantidad: 9
    },
    //Less
    {
      id: 370,
      name: 'Less de encaje',
      size: '85',
      category: 'Parte_inferior',
      image: 'less_de_encaje.jpeg',
      description: 'Pack x3 de less de encaje',
      price: 9000,
      stock: 9,
      cantidad: 9
    },
    //Boxers_niños
    {
      id: 390,
      name: 'Boxer de niño gris',
      size: '12',
      category: 'niño',
      image: 'boxer_niño_gris_12.jpeg',
      description: 'Boxer de niño',
      price: 8500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 391,
      name: 'Boxer de niño amarillo',
      size: '12',
      category: 'niño',
      image: 'boxer_niño_amarillo_12.jpeg',
      description: 'Boxer de niño',
      price: 8500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 392,
      name: 'Boxer de niño amarillo',
      size: '14',
      category: 'niño',
      image: 'boxer_niño_amarillo_14.jpeg',
      description: 'Boxer de niño',
      price: 8500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 393,
      name: 'Boxer de niño lody',
      size: '14',
      category: 'niño',
      image: 'boxer_niño_lody_14.jpeg',
      description: 'Boxer de niño',
      price: 8500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 394,
      name: 'Boxer de niño azul',
      size: '14',
      category: 'niño',
      image: 'boxer_niño_azul_14.jpeg',
      description: 'Boxer de niño',
      price: 8500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 395,
      name: 'Boxer de niño estampado playa',
      size: '14',
      category: 'niño',
      image: 'boxer_niño_hawaii_14.jpeg',
      description: 'Boxer de niño',
      price: 8500,
      stock: 1,
      cantidad: 1
    },
    //boxers_adultos
    {
      id: 420,
      name: 'Boxer de hombre azul marino',
      size: 'S',
      category: 'adulto',
      image: 'boxer_hombre_azul_marino_S.jpeg',
      description: 'Boxer de hombre',
      price: 13500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 421,
      name: 'Boxer de hombre color oxido',
      size: 'M',
      category: 'adulto',
      image: 'boxer_hombre_oxido_M.jpeg',
      description: 'Boxer de hombre',
      price: 13500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 422,
      name: 'Boxer de hombre estampado turquesa',
      size: 'M',
      category: 'adulto',
      image: 'boxer_hombre_estampado_turquesa_M.jpeg',
      description: 'Boxer de hombre',
      price: 13500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 423,
      name: 'Boxer de hombre celeste bb',
      size: 'XL',
      category: 'adulto',
      image: 'boxer_hombre_celeste_bb_Ck_XL.jpeg',
      description: 'Boxer de hombre',
      price: 13500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 424,
      name: 'Boxer de hombre estampado flamenco',
      size: 'XL',
      category: 'adulto',
      image: 'boxer_hombre_estampado_flamencos_XL.jpeg',
      description: 'Boxer de hombre',
      price: 13500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 425,
      name: 'Boxer de hombre estampado cadaveres',
      size: 'XL',
      category: 'adulto',
      image: 'boxer_hombre_estampado_cadaveres_XL.jpeg',
      description: 'Boxer de hombre',
      price: 13500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 426,
      name: 'Boxer de hombre estampado negro',
      size: 'XL',
      category: 'adulto',
      image: 'boxer_hombre_estampado_negro_XL.jpeg',
      description: 'Boxer de hombre',
      price: 13500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 427,
      name: 'Boxer de hombre estampado playa',
      size: 'XL',
      category: 'adulto',
      image: 'boxer_hombre_estampado_playa_XL.jpeg',
      description: 'Boxer de hombre',
      price: 13500,
      stock: 1,
      cantidad: 1
    },



    //pijama_camisolin
    //camisolin talle 1
    {
      id: 450,
      name: 'Camisolin blanco',
      size: '1',
      category: 'Camisolin',
      image: 'camisolin_blanco_talle1.jpeg',
      description: 'Camisolin blanco de tul y encaje',
      price: 15000,
      stock: 1,
      cantidad: 1

    },
    {
      id: 451,
      name: 'Camisolin rojo',
      size: '1',
      category: 'Camisolin',
      image: 'camisolin_rojo_talle1.jpeg',
      description: 'Camisolin rojo de tul y encaje',
      price: 15000,
      stock: 1,
      cantidad: 1

    },
    //pijamas
    {
      id: 470,
      name: 'Pijama verde menta',
      size: '3',
      category: 'Pijama',
      image: 'pijama_pant_polar_soft_verde_menta.jpeg',
      description: 'Pijama pant polar soft',
      price: 15000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 471,
      name: 'Pijama verde menta',
      size: '4',
      category: 'Pijama',
      image: 'pijama_pant_polar_soft_verde_menta.jpeg',
      description: 'Pijama pant polar soft',
      price: 15000,
      stock: 1,
      cantidad: 1
    },

    //ruanas, sacos, sweaters
    {
      id: 490,
      name: 'Ruana verde oscuro',
      size: '1',
      category: 'ruanas',
      image: 'ruana_verde.jpeg',
      description: 'Ruana lisa verde',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 491,
      name: 'Ruana gris',
      size: '1',
      category: 'ruanas',
      image: 'ruana_gris_lineas.jpeg',
      description: 'Ruana gris con rayas',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 492,
      name: 'Ruana gris',
      size: '1',
      category: 'ruanas',
      image: 'ruana_gris_lisa.jpeg',
      description: 'Ruana gris lisa',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 493,
      name: 'Ruana negra',
      size: '1',
      category: 'ruanas',
      image: 'ruana_negra_lisa.jpeg',
      description: 'Ruana negra lisa',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 494,
      name: 'Ruana rosa',
      size: '1',
      category: 'ruanas',
      image: 'ruana_rosa_lisa.jpeg',
      description: 'Ruana rosa lisa',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 495,
      name: 'Ruana celeste',
      size: '1',
      category: 'ruanas',
      image: 'ruana_celeste_lisa.jpeg',
      description: 'Ruana celeste lisa',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 496,
      name: 'Ruana verde',
      size: '1',
      category: 'ruanas',
      image: 'ruana_lisa_verde.jpeg',
      description: 'Ruana verde lisa',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 497,
      name: 'Ruana multicolor',
      size: '1',
      category: 'ruanas',
      image: 'ruana_multicolor.jpeg',
      description: 'Ruana verde, marron y blanca',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 498,
      name: 'Ruana gris',
      size: '1',
      category: 'ruanas',
      image: 'ruana_gris_rosado.jpeg',
      description: 'Ruana rosada, negra y blanca',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 499,
      name: 'Ruana multicolor',
      size: '1',
      category: 'ruanas',
      image: 'ruana_negra_blanca.jpeg',
      description: 'Ruana negra y blanca',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 500,
      name: 'Ruana multicolor',
      size: '1',
      category: 'ruanas',
      image: 'ruana_verde_negra_gris.jpeg',
      description: 'Ruana negra, blanca y turquesa',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 501,
      name: 'Ruana multicolor clara',
      size: '1',
      category: 'ruanas',
      image: 'ruana_clara.jpeg',
      description: 'Ruana gris, blanca y crema',
      price: 14000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 502,
      name: 'Sweater marron',
      size: '3',
      category: 'sweaters',
      image: 'sweater_marron_lineas_3_25000.jpeg',
      description: 'Sweater marron con lineas',
      price: 25000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 503,
      name: 'Sweater marron',
      size: '2',
      category: 'sweaters',
      image: 'sweater_marron_lineas_2_25000.jpeg',
      description: 'Sweater marron con lineas',
      price: 25000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 504,
      name: 'Sweater negro',
      size: '3',
      category: 'sweaters',
      image: 'sweater_negro_lineas_3_25000 -.jpeg',
      description: 'Sweater negro con lineas',
      price: 25000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 505,
      name: 'Sweater negro',
      size: '2',
      category: 'sweaters',
      image: 'sweater_negro_lineas_2_25000.jpeg',
      description: 'Sweater negro con lineas',
      price: 25000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 506,
      name: 'Campera',
      size: '3',
      category: 'sweaters',
      image: 'campera_hilo_cardigan_vison_3_26000.jpeg',
      description: 'Campera de hilo cardigan',
      price: 26000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 507,
      name: 'Sweater crema',
      size: '2',
      category: 'sweaters',
      image: 'sweater_morley_crema_2_25000.jpeg',
      description: 'Sweater morley',
      price: 25000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 508,
      name: 'Sweater gris',
      size: '3',
      category: 'sweaters',
      image: 'sweater_gris_3_37000.jpeg',
      description: 'Sweater gris',
      price: 37000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 509,
      name: 'Sweater multicolor',
      size: '3',
      category: 'sweaters',
      image: 'sweater_hilo_3_25000.jpeg',
      description: 'Sweater hilo',
      price: 25000,
      stock: 1,
      cantidad: 1
    },
    //sacos
    {
      id: 530,
      name: 'Saco rosa viejo',
      size: '4',
      category: 'sacos',
      image: 'saco_paño_rosa_viejo_4_42000.jpeg',
      description: 'Saco paño',
      price: 42000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 531,
      name: 'Camisaco blanco',
      size: '4',
      category: 'sacos',
      image: 'camisaco_blanco_4_36000.jpeg',
      description: 'Camisaco blanco',
      price: 36000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 532,
      name: 'Blazer blanco',
      size: '1',
      category: 'sacos',
      image: 'Blazer_blanco_1_40000.jpeg',
      description: 'Blazer blanco',
      price: 40000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 533,
      name: 'Sweater negro',
      size: '1',
      category: 'sacos',
      image: 'sweater_lanilla_negro_1.jpeg',
      description: 'Sweater de lanilla',
      price: 25000,
      stock: 1,
      cantidad: 1
    },
    //vestido, pollera
    {
      id: 550,
      name: 'Pollera azul',
      size: '3',
      category: 'pollera',
      image: 'pollera_bengalina_botones_dorados_3_24000.jpeg',
      description: 'Pollera a la rodilla de bengalina y botones dorados',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 551,
      name: 'Pollera blanca',
      size: '4',
      category: 'pollera',
      image: 'pollera_bengalina_botones_dorados_blanco_4_24000.jpeg',
      description: 'Pollera a la rodilla de bengalina y botones dorados',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 552,
      name: 'Pollera negra',
      size: '4',
      category: 'pollera',
      image: 'pollera_bengalina_botones_dorados_negro_5_24000.jpeg',
      description: 'Pollera a la rodilla de bengalina y botones dorados',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 553,
      name: 'Pollera negra',
      size: '5',
      category: 'pollera',
      image: 'pollera_bengalina_botones_dorados_negro_5_24000.jpeg',
      description: 'Pollera a la rodilla de bengalina y botones dorados',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 554,
      name: 'Pollera negra',
      size: '3',
      category: 'pollera',
      image: 'pollera_acampanada_sastrera_negro_5_24000.jpeg',
      description: 'Pollera acampanada tela sastrera',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 555,
      name: 'Pollera negra',
      size: '4',
      category: 'pollera',
      image: 'pollera_acampanada_sastrera_negro_5_24000.jpeg',
      description: 'Pollera acampanada tela sastrera',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 556,
      name: 'Pollera negra',
      size: '5',
      category: 'pollera',
      image: 'pollera_acampanada_sastrera_negro_5_24000.jpeg',
      description: 'Pollera acampanada tela sastrera',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 557,
      name: 'Pollera negra',
      size: '42',
      category: 'pollera',
      image: 'Pollera_gabardina_negra_42_24000.jpeg',
      description: 'Pollera gabardina',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 558,
      name: 'Pollera negra',
      size: '36',
      category: 'pollera',
      image: 'Pollera_gabardina_negra_42_24000.jpeg',
      description: 'Pollera gabardina',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 559,
      name: 'Pollera negra',
      size: '42',
      category: 'pollera',
      image: 'Pollera_gabardina_negra_42_24000.jpeg',
      description: 'Pollera gabardina',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 560,
      name: 'Pollera blanca',
      size: '44',
      category: 'pollera',
      image: 'pollera_bengalina_blanco_44_cadena_24000.jpeg',
      description: 'Pollera bengalina con cadena',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 561,
      name: 'Pollera blanca',
      size: '44',
      category: 'pollera',
      image: 'pollera_bengalina_negro_44_cadena_24000.jpeg',
      description: 'Pollera bengalina con cadena',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 562,
      name: 'Pollera negra',
      size: '40',
      category: 'pollera',
      image: 'pollera_gabardina_negra_botones_dorados_40_24000.jpeg',
      description: 'Pollera gabardina con botones dorados',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 563,
      name: 'Pollera blanca',
      size: '42',
      category: 'pollera',
      image: 'pollera_gabardina_blanco_botones_dorados_42_24000.jpeg',
      description: 'Pollera gabardina con botones dorados',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 564,
      name: 'Pollera negra',
      size: '42',
      category: 'pollera',
      image: 'pollera_engomada_negro_tajo_42_24000.jpeg',
      description: 'Pollera engomada con tajo atrás',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 565,
      name: 'Pollera marron',
      size: '46',
      category: 'pollera',
      image: 'pollera_engomada_marron_46_24000.jpeg',
      description: 'Pollera engomada',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 566,
      name: 'Pollera blanca',
      size: '40',
      category: 'pollera',
      image: 'pollera_engomada_blanca_tajo_40_24000.jpeg',
      description: 'Pollera engomada con tajo atrás',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 567,
      name: 'Pollera bordó',
      size: '38',
      category: 'pollera',
      image: 'pollera_bengalina_volado_bordo_40_24000.jpeg',
      description: 'Pollera a la rodilla bengalina',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 568,
      name: 'Pollera bordó',
      size: '40',
      category: 'pollera',
      image: 'pollera_bengalina_volado_bordo_40_24000.jpeg',
      description: 'Pollera a la rodilla bengalina',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 569,
      name: 'Pollera rosa',
      size: '40',
      category: 'pollera',
      image: 'pollera_bengalina_volado_rosa_40_24000.jpeg',
      description: 'Pollera a la rodilla bengalina',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 570,
      name: 'Pollera azul oscuro',
      size: '42',
      category: 'pollera',
      image: 'pollera_bengalina_volado_bordo_42_24000.jpeg',
      description: 'Pollera a la rodilla bengalina',
      price: 24000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 571,
      name: 'Pollera negra',
      size: '46',
      category: 'pollera',
      image: 'Pollera_larga_termica_negro_46_30500.jpeg',
      description: 'Pollera larga térmica',
      price: 30500,
      stock: 1,
      cantidad: 1
    },
    {
      id: 572,
      name: 'Vestido negro',
      size: 'P',
      category: 'vestido',
      image: 'vestido_gabardina_negro_p_40000.jpeg',
      description: 'Vestido de gabardina',
      price: 40000,
      stock: 1,
      cantidad: 1
    },
    //camisa, remera
    {
      id: 590,
      name: 'Remera negra',
      size: 'L',
      category: 'remera',
      image: 'remera_termica_negra_L_17000.jpeg',
      description: 'Remera térmica',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 591,
      name: 'Remera blanca',
      size: 'M',
      category: 'remera',
      image: 'remera_termica_blanca_M_17000.jpeg',
      description: 'Remera térmica',
      price: 17000,
      stock: 1,
      cantidad: 1
    },
    {
      id: 592,
      name: 'Remera blanca',
      size: 'L',
      category: 'remera',
      image: 'remera_termica_blanca_L_17000.jpeg',
      description: 'Remera térmica',
      price: 17000,
      stock: 1,
      cantidad: 1
    },

    /*
    //medias, soquetes
    {
      id: 62,
      name: 'Producto 1',
      size: 'S',
      category: 'soquetes',
      image: 'niño.png',
      description: 'Soquetes cómodos',
      price: 1499,
      stock: 1,
      cantidad: 1
 
    },
    {
      id: 63,
      name: 'Producto 2',
      size: 'M',
      category: 'medias',
      image: 'niño2.png',
      description: 'Medias cómodas',
      price: 1499,
      stock: 10,
      cantidad: 9
    },
    {
      id: 64,
      name: 'Producto 3',
      size: 'L',
      category: 'soquetes',
      image: 'niño3.png',
      description: 'Soquetes cómodos',
      price: 1499,
      stock: 10,
      cantidad: 9
    },
    {
      id: 65,
      name: 'Producto 4',
      size: 'XL',
      category: 'medias',
      image: 'niño.png',
      description: 'Medias cómodas',
      price: 1499,
      stock: 10,
      cantidad: 9
    },
    {
      id: 66,
      name: 'Producto 5',
      size: 'XXL',
      category: 'soquetes',
      image: 'niño2.png',
      description: 'Soquetes cómodos',
      price: 1499,
      stock: 10,
      cantidad: 9
    },
    //pantalon_sastrero
    {
      id: 82,
      name: 'Producto 1',
      size: 'S',
      category: 'pantalones',
      image: 'pantalon1.jpeg',
      description: 'Pantalon Sastrero cómodos',
      price: 1499,
      stock: 1,
      cantidad: 1
    },
    {
      id: 83,
      name: 'Producto 2',
      size: 'M',
      category: 'pantalones',
      image: 'pantalon2.jpg',
      description: 'Pantalon Sastrero cómodos',
      price: 1499,
      stock: 5,
      cantidad: 9
    },
    {
      id: 84,
      name: 'Producto 3',
      size: 'L',
      category: 'pantalones',
      image: 'pantalon3.png',
      description: 'Pantalon Sastrero cómodos',
      price: 1499,
      stock: 5,
      cantidad: 9
    },
    {
      id: 85,
      name: 'Producto 4',
      size: 'XL',
      category: 'pantalones',
      image: 'pantalon4.jpg',
      description: 'Pantalon Sastrero cómodos',
      price: 1499,
      stock: 5,
      cantidad: 9
    },
    {
      id: 86,
      name: 'Producto 5',
      size: 'XXL',
      category: 'pantalones',
      image: 'pantalon4.jpg',
      description: 'Pantalon Sastrero cómodos',
      price: 1499,
      stock: 5,
      cantidad: 9
    },
*/
  ];

  getProducts() {
    return this.productslistservice;
  }

  getProductById(id: number): Productmodelsinterface | undefined {
    return this.productslistservice.find(p => p.id === id);
  }

  // product.service.ts
  updateStock(productId: number, quantity: number): void {
    const product = this.productslistservice.find(p => p.id === productId);
    if (product && product.stock >= quantity) {
      product.stock -= quantity;
    }
  }
}

