import * as SQLite from 'expo-sqlite';

import type { ProductoDB, ProductoInput } from '../types/productoDB';

const DATABASE_NAME = 'artisan_auction.db';

let dbPromise: Promise<SQLite.SQLiteDatabase> | null = null;

function getDatabase() {
  if (!dbPromise) {
    dbPromise = SQLite.openDatabaseAsync(DATABASE_NAME);
  }

  return dbPromise;
}

export async function initDB() {
  const db = await getDatabase();

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS productos_sqlite (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      precio REAL NOT NULL,
      categoria TEXT NOT NULL,
      artesano TEXT NOT NULL
    );
  `);
}

export async function insertarProducto(producto: ProductoInput) {
  const db = await getDatabase();

  await db.runAsync(
    `INSERT INTO productos_sqlite (nombre, descripcion, precio, categoria, artesano)
     VALUES (?, ?, ?, ?, ?);`,
    producto.nombre,
    producto.descripcion,
    producto.precio,
    producto.categoria,
    producto.artesano,
  );
}

export async function obtenerProductos() {
  const db = await getDatabase();

  return db.getAllAsync<ProductoDB>(
    `SELECT id, nombre, descripcion, precio, categoria, artesano
     FROM productos_sqlite
     ORDER BY id DESC;`,
  );
}

export async function actualizarProducto(id: number, producto: ProductoInput) {
  const db = await getDatabase();

  await db.runAsync(
    `UPDATE productos_sqlite
     SET nombre = ?, descripcion = ?, precio = ?, categoria = ?, artesano = ?
     WHERE id = ?;`,
    producto.nombre,
    producto.descripcion,
    producto.precio,
    producto.categoria,
    producto.artesano,
    id,
  );
}

export async function eliminarProducto(id: number) {
  const db = await getDatabase();

  await db.runAsync('DELETE FROM productos_sqlite WHERE id = ?;', id);
}
