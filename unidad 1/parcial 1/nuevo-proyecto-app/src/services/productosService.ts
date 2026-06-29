import type { Artesano, Producto } from '../types/productos';

export const artesanos: Artesano[] = [
  {
    id: 'art-1',
    nombre: 'Luz Hernandez',
    comunidad: 'Tequisquiapan, Queretaro',
    especialidad: 'Ceramica artesanal',
  },
  {
    id: 'art-2',
    nombre: 'Mateo Ramirez',
    comunidad: 'Bernal, Queretaro',
    especialidad: 'Textiles bordados',
  },
  {
    id: 'art-3',
    nombre: 'Elena Cruz',
    comunidad: 'Amealco, Queretaro',
    especialidad: 'Munecas tradicionales',
  },
];

export const productos: Producto[] = [
  {
    id: 'prod-1',
    nombre: 'Jarron de barro brunido',
    descripcion: 'Pieza moldeada y pulida a mano con acabado natural.',
    precioInicial: 850,
    categoria: 'Ceramica',
    artesanoId: 'art-1',
  },
  {
    id: 'prod-2',
    nombre: 'Camino de mesa bordado',
    descripcion: 'Textil con motivos florales elaborado en telar tradicional.',
    precioInicial: 620,
    categoria: 'Textil',
    artesanoId: 'art-2',
  },
  {
    id: 'prod-3',
    nombre: 'Muneca Lele de coleccion',
    descripcion: 'Figura artesanal con vestido bordado y detalles regionales.',
    precioInicial: 480,
    categoria: 'Arte popular',
    artesanoId: 'art-3',
  },
];
