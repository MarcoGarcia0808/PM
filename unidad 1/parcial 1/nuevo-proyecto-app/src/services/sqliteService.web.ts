import type { ProductoDB, ProductoInput } from '../types/productoDB';

const WEB_SQLITE_MESSAGE =
  'SQLite local con expo-sqlite no esta disponible en esta ejecucion web. Prueba esta pantalla en Expo Go o en un emulador Android/iOS.';

export async function initDB() {
  console.warn(WEB_SQLITE_MESSAGE);
}

export async function insertarProducto(_producto: ProductoInput) {
  throw new Error(WEB_SQLITE_MESSAGE);
}

export async function obtenerProductos(): Promise<ProductoDB[]> {
  console.warn(WEB_SQLITE_MESSAGE);
  return [];
}

export async function actualizarProducto(_id: number, _producto: ProductoInput) {
  throw new Error(WEB_SQLITE_MESSAGE);
}

export async function eliminarProducto(_id: number) {
  throw new Error(WEB_SQLITE_MESSAGE);
}
