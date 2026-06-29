import { useEffect, useState } from 'react';

import { artesanos, productos as productosData } from '../services/productosService';
import type { Artesano, Producto } from '../types/productos';

export function useProductos() {
  // Guarda la lista de productos que se mostrara en HomeScreen.
  const [productos, setProductos] = useState<Producto[]>([]);
  // Controla si los datos aun se estan cargando.
  const [cargando, setCargando] = useState(true);

  // Carga los productos iniciales cuando el hook se monta.
  useEffect(() => {
    setProductos(productosData);
    setCargando(false);
  }, []);

  const getArtesano = (artesanoId: string): Artesano | undefined => {
    return artesanos.find((artesano) => artesano.id === artesanoId);
  };

  // Devuelve los productos, el estado de carga y una ayuda para consultar artesanos.
  return {
    productos,
    cargando,
    getArtesano,
  };
}
