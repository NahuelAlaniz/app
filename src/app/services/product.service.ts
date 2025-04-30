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
      id: 12,
      name: 'Bralette negro',
      size: '85',
      category: 'Bralette',
      image: 'bralette_negro_detalle_90.jpeg',
      description: 'Bralette con aro negro de tull y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 13,
      name: 'Bralette negro',
      size: '85',
      category: 'Bralette',
      image: 'conjunto_negro_85.jpeg',
      description: 'Bralette de algodón',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    //bralette talle 90

    {
      id: 24,
      name: 'Bralette negro',
      size: '90',
      category: 'Bralette',
      image: 'bralette_negro_flores_90.jpeg',
      description: 'Bralette de encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 25,
      name: 'Bralette naranja',
      size: '90',
      category: 'Bralette',
      image: 'bralette_naranja_90.jpeg',
      description: 'Bralette de saten con puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 26,
      name: 'Bralette fluorecente',
      size: '90',
      category: 'Bralette',
      image: 'bralette_fluorecente_90.jpeg',
      description: 'Bralette morley',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 27,
      name: 'Bralette blanco',
      size: '90',
      category: 'Bralette',
      image: 'bralette_blanco_90_violeta.jpeg',
      description: 'Bralette de tull y encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 28,
      name: 'Bralette marino',
      size: '90',
      category: 'Bralette',
      image: 'bralette_marino_90.jpeg',
      description: 'Bralette de encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 29,
      name: 'Bralette negro',
      size: '90',
      category: 'Bralette',
      image: 'bralette_negro_detalle_90.jpeg',
      description: 'Bralette con aro de tull y encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },

    //bralette talle 95
    {
      id: 40,
      name: 'Bralette blanco',
      size: '95',
      category: 'Bralette',
      image: 'bralette_claro_95.jpeg',
      description: 'Bralette con aro con tull y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 41,
      name: 'Bralette naranja',
      size: '95',
      category: 'Bralette',
      image: 'bralette_naranja_95.jpeg',
      description: 'Bralette de puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 42,
      name: 'Bralette negro',
      size: '95',
      category: 'Bralette',
      image: 'bralette_negro_95.jpeg',
      description: 'Bralette con aro y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    //bralette talle 100
    {
      id: 50,
      name: 'Bralette rojo',
      size: '100',
      category: 'Bralette',
      image: 'bralette_rojo_100.jpeg',
      description: 'Bralette de tull y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 51,
      name: 'Bralette pardo negro',
      size: '100',
      category: 'Bralette',
      image: 'bralette_pardo_negro_100.jpeg',
      description: 'Bralette de tull print',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 52,
      name: 'Bralette blanco ',
      size: '100',
      category: 'Bralette',
      image: 'bralette_blanco_100.jpeg',
      description: 'Bralette deportivo de algodón y elástico',
      price: 1499,
      stock: 9,
      cantidad: 9
    },


    //bralette talle 105
    {
      id: 60,
      name: 'Bralette blanco ',
      size: '105',
      category: 'Bralette',
      image: 'bralette_blanco_105.jpeg',
      description: 'Bralette armado de tull y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },

    //conjunto talle 85
    {
      id: 70,
      name: 'Conjunto rojo',
      size: '85',
      category: 'Conjunto',
      image: 'conjunto_rojo_85.jpeg',
      description: 'Conjunto armado de puntilla y tull',
      price: 1499,
      stock: 9,
      cantidad: 9

    },
    {
      id: 71,
      name: 'Conjunto blanco',
      size: '85',
      category: 'Conjunto',
      image: 'conjunto_blanco_85.jpeg',
      description: 'Conjunto armado de puntilla y tull',
      price: 1499,
      stock: 9,
      cantidad: 9

    },


    //conjunto talle 90

    {
      id: 80,
      name: 'Conjunto pardo',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_pardo_90.jpeg',
      description: 'Conjunto armado de algodon estampado print',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 81,
      name: 'Conjunto gris oscuro',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_gris_oscuro_90.jpeg',
      description: 'Conjunto armado de algodon símil jeans',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 82,
      name: 'Conjunto negro',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_negro_90.jpeg',
      description: 'Conjunto armado de microfibra',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 83,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90_puntos.jpeg',
      description: 'Conjunto armado de microfibra elaborada',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 84,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90.jpeg',
      description: 'Conjunto armado de microfibra y encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 85,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90_estrellas.jpeg',
      description: 'Conjunto armado de algodon estampado estrella',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 86,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90_detalles.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 87,
      name: 'Conjunto beige',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_beige_90.jpeg',
      description: 'Conjunto armado de algodon y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 88,
      name: 'Conjunto beige',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_beige_90_flores.jpeg',
      description: 'Conjunto armado de microfibra elaborada con vedetina',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 89,
      name: 'Conjunto blanco',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_blanco_90_raro.jpeg',
      description: 'Conjunto tripack de puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 90,
      name: 'Conjunto rojo',
      size: '90',
      category: 'Conjunto',
      image: 'conjunto_rojo_90.jpeg',
      description: 'Conjunto deportivo de algodón',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    //Conjunto talle 95
    {
      id: 100,
      name: 'Conjunto petroleo',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_verde_95.jpeg',
      description: 'Conjunto triangulo taza soft de encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 101,
      name: 'Conjunto rojo',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_rojo_95.jpeg',
      description: 'Conjunto armado de puntilla y tull',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 102,
      name: 'Conjunto azul',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_azul_oscuro_95.jpeg',
      description: 'Conjunto armado de algodon símil jeans',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 103,
      name: 'Conjunto blanco',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_blanco_raro_95.jpeg',
      description: 'Conjunto triangulito taza soft de puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 104,
      name: 'Conjunto blanco',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_blanco_95.jpeg',
      description: 'Conjunto tripack de puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 105,
      name: 'Conjunto negro',
      size: '95',
      category: 'Conjunto',
      image: 'conjunto_negro_95.jpeg',
      description: 'Conjunto tripack de puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    //conjunto talle 100
    {
      id: 110,
      name: 'Conjunto beige',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_beige_100.jpeg',
      description: 'Conjunto armado de microfibra y encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 111,
      name: 'Conjunto rosado',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_rosado_100.jpeg',
      description: 'Conjunto triangulo taza soft de puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 112,
      name: 'Conjunto negro',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_negro_100.jpeg',
      description: 'Conjunto triangulo taza soft de puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 113,
      name: 'Conjunto bordó',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_bordó_100.jpeg',
      description: 'Conjunto armado de puntilla y tul con vedetina',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 114,
      name: 'Conjunto rojo',
      size: '100',
      category: 'Conjunto',
      image: 'bralette_rojo_falda_100.jpeg',
      description: 'Conjunto tripack de encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 115,
      name: 'Conjunto beige',
      size: '100',
      category: 'Conjunto',
      image: 'conjunto_armado_beige_100.jpeg',
      description: 'Conjunto armado de microfibra y encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },

    //conjunto talle 105
    {
      id: 120,
      name: 'Conjunto negro',
      size: '105',
      category: 'Conjunto',
      image: 'conjunto_negro_105.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 121,
      name: 'Conjunto petroleo',
      size: '105',
      category: 'Conjunto',
      image: 'conjunto_turquesa_105.jpeg',
      description: 'Conjunto triangulo taza soft de puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    //conjunto talle 110
    {
      id: 130,
      name: 'Conjunto negro',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_negro_110.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },

    {
      id: 131,
      name: 'Conjunto celeste',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_celeste_110.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },

    {
      id: 132,
      name: 'Conjunto negro',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_negro_liso_110.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 133,
      name: 'Conjunto blanco',
      size: '110',
      category: 'Conjunto',
      image: 'conjunto_blanco_110.jpeg',
      description: 'Conjunto armado de microfibra',
      price: 1499,
      stock: 9,
      cantidad: 9
    },


    //conjunto talle 110
    {
      id: 140,
      name: 'Conjunto beige',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_beige_115.jpeg',
      description: 'Conjunto armado de algodón y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 155,
      name: 'Conjunto verde',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_verde_115.jpeg',
      description: 'Conjunto armado de microfibra y puntilla',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 156,
      name: 'Conjunto negro',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_negro_115.jpeg',
      description: 'Conjunto armado de encaje',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 157,
      name: 'Conjunto salmon',
      size: '115',
      category: 'Conjunto',
      image: 'conjunto_rosado_115.jpeg',
      description: 'Conjunto armado de microfibra',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    //corpiño talle 100
    {
      id: 160,
      name: 'Corpiño negro',
      size: '100',
      category: 'Corpiño',
      image: 'corpiño_mariposa_100.jpeg',
      description: 'Corpiño reductor de algodón',
      price: 1499,
      stock: 9,
      cantidad: 9
    },

    //corpiño talle 105
    {
      id: 170,
      name: 'Corpiño hueso',
      size: '105',
      category: 'Corpiño',
      image: 'corpiño_reductor_hueso_105.jpeg',
      description: 'Corpiño reductor de algodón',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    {
      id: 172,
      name: 'Corpiño negro',
      size: '105',
      category: 'Corpiño',
      image: 'corpiño_reductor_negro_105.jpeg',
      description: 'Corpiño reductor de algodón',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    //corpiño talle 110
    {
      id: 180,
      name: 'Corpiño azul',
      size: '110',
      category: 'Corpiño',
      image: 'corpiño_amamantar_110.jpeg',
      description: 'Corpiño de amamantar de algodón',
      price: 1499,
      stock: 9,
      cantidad: 9
    },
    //Parte inferior
    //Vedetinas
    {
      id: 190,
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
      id: 191,
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
      id: 200,
      name: 'Less de encaje Pack x3',
      size: '85',
      category: 'Parte_inferior',
      image: 'less_de_encaje.jpeg',
      description: 'Pack x3 de less de encaje',
      price: 9000,
      stock: 9,
      cantidad: 9
    },


    /*
        //pijama_camisolin
        //camisolin talle 1
        {
          id: 60,
          name: 'Camisolin blanco',
          size: '1',
          category: 'Camisolin',
          image: 'camisolin_blanco_talle1.jpeg',
          description: 'Camisolin blanco',
          price: 1499,
          stock: 1,
          cantidad: 1
    
        },
        {
          id: 61,
          name: 'Camisolin blanco',
          size: '1',
          category: 'Camisolin',
          image: 'camisolin_rojo_talle1.jpeg',
          description: 'Camisolin blanco',
          price: 1499,
          stock: 10,
          cantidad: 9
    
        },
    
    
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
        //ruanas, sacos, sweaters
        {
          id: 67,
          name: 'Ruana 1',
          size: 'S',
          category: 'ruanas',
          image: 'ruana11.png',
          description: 'Ruanas cómodas',
          price: 1499,
          stock: 1,
          cantidad: 1
        },
        {
          id: 68,
          name: 'Producto 2',
          size: 'M',
          category: 'sacos',
          image: 'saco1.png',
          description: 'Sacos cómodos',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 69,
          name: 'Producto 3',
          size: 'L',
          category: 'sacos',
          image: 'saco2.png',
          description: 'Sweaters cómodo',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 70,
          name: 'Producto 4',
          size: 'XL',
          category: 'sweaters',
          image: 'sweater1.png',
          description: 'Sweaters cómodo',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 71,
          name: 'Producto 5',
          size: 'XXL',
          category: 'sweaters',
          image: 'sweater2.png',
          description: 'Sweaters cómodo',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        //vestido, pollera
        {
          id: 72,
          name: 'Producto 1',
          size: 'S',
          category: 'vestido',
          image: 'vestido1.webp',
          description: 'Vestido cómodo',
          price: 1499,
          stock: 1,
          cantidad: 1
        },
        {
          id: 73,
          name: 'Producto 2',
          size: 'M',
          category: 'vestido',
          image: 'vestido2.avif',
          description: 'Vestido cómodo',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 74,
          name: 'Producto 3',
          size: 'L',
          category: 'pollera',
          image: 'pollera1.jpg',
          description: 'Pollera cómoda',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 75,
          name: 'Producto 4',
          size: 'XL',
          category: 'pollera',
          image: 'pollera2.webp',
          description: 'Pollera cómoda',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 76,
          name: 'Producto 5',
          size: 'XXL',
          category: 'pollera',
          image: 'pollera3.webp',
          description: 'Pollera cómoda',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        //camisa, remera
        {
          id: 77,
          name: 'Producto 1',
          size: 'S',
          category: 'camisa',
          image: 'camisa1.jpg',
          description: 'Remera cómodas',
          price: 1499,
          stock: 1,
          cantidad: 1
        },
        {
          id: 78,
          name: 'Producto 2',
          size: 'M',
          category: 'camisa',
          image: 'camisa2.jpg',
          description: 'Remera cómodas',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 79,
          name: 'Producto 3',
          size: 'L',
          category: 'remera',
          image: 'remera1.jpg',
          description: 'Remera cómodas',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 80,
          name: 'Producto 4',
          size: 'XL',
          category: 'remera',
          image: 'remera2.jpg',
          description: 'Remera cómodas',
          price: 1499,
          stock: 10,
          cantidad: 9
        },
        {
          id: 81,
          name: 'Producto 5',
          size: 'XXL',
          category: 'camisa',
          image: 'camisa3.jpg',
          description: 'Camisa cómoda',
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

