export interface ProductoDB {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  artesano: string;
}

export type ProductoInput = Omit<ProductoDB, "id">;
