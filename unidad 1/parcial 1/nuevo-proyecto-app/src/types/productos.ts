export type Producto = {
  id: string;
  nombre: string;
  descripcion: string;
  precioInicial: number;
  categoria: string;
  artesanoId: string;
};

export type Artesano = {
  id: string;
  nombre: string;
  comunidad: string;
  especialidad: string;
};
