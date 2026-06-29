import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';
import {
  actualizarProducto,
  eliminarProducto,
  initDB,
  insertarProducto,
  obtenerProductos,
} from '../services/sqliteService';
import { globalStyles } from '../styles/globalStyles';
import type { ProductoDB, ProductoInput } from '../types/productoDB';

type ProductoForm = Omit<ProductoInput, 'precio'> & {
  precio: string;
};

const formularioInicial: ProductoForm = {
  nombre: '',
  descripcion: '',
  precio: '',
  categoria: '',
  artesano: '',
};

export function SQLiteProductosScreen() {
  const [productos, setProductos] = useState<ProductoDB[]>([]);
  const [formulario, setFormulario] = useState<ProductoForm>(formularioInicial);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [mensaje, setMensaje] = useState('Inicializando base de datos...');
  const [guardando, setGuardando] = useState(false);

  const cargarProductos = async () => {
    const registros = await obtenerProductos();
    console.log('Productos consultados:', registros.length);
    setProductos(registros);
  };

  useEffect(() => {
    if (Platform.OS === 'web') {
      setMensaje('SQLite disponible en Expo Go o emulador');
      return;
    }

    const prepararBaseDatos = async () => {
      try {
        await initDB();
        setMensaje('Base de datos inicializada');
        await cargarProductos();
      } catch (error) {
        setMensaje('No se pudo inicializar la base de datos');
        console.error('Error al inicializar la base de datos:', error);
      }
    };

    prepararBaseDatos();
  }, []);

  const actualizarCampo = (campo: keyof ProductoForm, valor: string) => {
    setFormulario((actual) => ({
      ...actual,
      [campo]: valor,
    }));
  };

  const limpiarFormulario = () => {
    setFormulario(formularioInicial);
    setEditandoId(null);
  };

  const obtenerProductoDesdeFormulario = (): ProductoInput | null => {
    const nombre = formulario.nombre.trim();
    const descripcion = formulario.descripcion.trim();
    const categoria = formulario.categoria.trim();
    const artesano = formulario.artesano.trim();
    const precio = Number.parseFloat(formulario.precio);

    if (!nombre || !descripcion || !formulario.precio.trim() || !categoria || !artesano) {
      Alert.alert('Datos incompletos', 'Completa todos los campos antes de guardar.');
      return null;
    }

    if (Number.isNaN(precio)) {
      Alert.alert('Precio invalido', 'Ingresa un precio numerico valido.');
      return null;
    }

    return {
      nombre,
      descripcion,
      precio,
      categoria,
      artesano,
    };
  };

  const guardarProducto = async () => {
    if (guardando) {
      return;
    }

    const producto = obtenerProductoDesdeFormulario();

    if (!producto) {
      return;
    }

    try {
      setGuardando(true);
      setMensaje('Guardando producto...');
      console.log('Antes de guardar producto:', producto);

      await insertarProducto(producto);
      console.log('Producto insertado correctamente');

      await cargarProductos();
      console.log('Lista actualizada despues de guardar');

      limpiarFormulario();
      setMensaje('Producto guardado');
    } catch (error) {
      console.error('Error al guardar producto:', error);
      setMensaje('No se pudo guardar el producto');
      Alert.alert('Error', 'No se pudo guardar el producto. Revisa la consola.');
    } finally {
      setGuardando(false);
    }
  };

  const seleccionarProducto = (producto: ProductoDB) => {
    setEditandoId(producto.id);
    setFormulario({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: String(producto.precio),
      categoria: producto.categoria,
      artesano: producto.artesano,
    });
    setMensaje(`Editando producto #${producto.id}`);
  };

  const guardarActualizacion = async () => {
    if (editandoId === null) {
      Alert.alert('Selecciona un producto', 'Pulsa Editar en un producto antes de actualizar.');
      return;
    }

    const producto = obtenerProductoDesdeFormulario();

    if (!producto) {
      return;
    }

    await actualizarProducto(editandoId, producto);
    await cargarProductos();
    limpiarFormulario();
    setMensaje('Producto actualizado');
  };

  const borrarProducto = async (id: number) => {
    await eliminarProducto(id);
    await cargarProductos();

    if (editandoId === id) {
      limpiarFormulario();
    }

    setMensaje('Producto eliminado');
  };

  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <ScrollView contentContainerStyle={styles.screen}>
          <Header
            title="BD Local SQLite"
            subtitle="CRUD local para productos de Artisan Auction."
          />

          <Text style={styles.status}>{mensaje}</Text>

          <InfoCard>
            <Text style={styles.sectionTitle}>Prueba en dispositivo o emulador</Text>
            <Text style={styles.emptyText}>
              expo-sqlite usa almacenamiento SQLite nativo. Para comprobar insertar,
              consultar, actualizar, eliminar y persistir datos, abre la app en Expo Go
              o en un emulador Android/iOS.
            </Text>
          </InfoCard>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={styles.screen} keyboardShouldPersistTaps="handled">
        <Header
          title="BD Local SQLite"
          subtitle="CRUD local para productos de Artisan Auction."
        />

        <Text style={styles.status}>{mensaje}</Text>

        <InfoCard>
          <Text style={styles.sectionTitle}>
            {editandoId ? `Editando producto #${editandoId}` : 'Nuevo producto'}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={formulario.nombre}
            onChangeText={(valor) => actualizarCampo('nombre', valor)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
            placeholder="Descripcion"
            value={formulario.descripcion}
            onChangeText={(valor) => actualizarCampo('descripcion', valor)}
          />
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            placeholder="Precio"
            value={formulario.precio}
            onChangeText={(valor) => actualizarCampo('precio', valor)}
          />
          <TextInput
            style={styles.input}
            placeholder="Categoria"
            value={formulario.categoria}
            onChangeText={(valor) => actualizarCampo('categoria', valor)}
          />
          <TextInput
            style={styles.input}
            placeholder="Artesano"
            value={formulario.artesano}
            onChangeText={(valor) => actualizarCampo('artesano', valor)}
          />

          <View style={styles.buttonGroup}>
            <View style={styles.buttonWrapper}>
              <Button
                disabled={guardando}
                title={guardando ? 'Guardando...' : 'Guardar producto'}
                onPress={guardarProducto}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                disabled={guardando}
                title="Actualizar producto"
                onPress={guardarActualizacion}
              />
            </View>
          </View>

          {editandoId ? <Button title="Cancelar edicion" onPress={limpiarFormulario} /> : null}
        </InfoCard>

        <Text style={styles.sectionTitle}>Productos almacenados</Text>

        {productos.length === 0 ? (
          <InfoCard>
            <Text style={styles.emptyText}>Aun no hay productos guardados.</Text>
          </InfoCard>
        ) : (
          productos.map((producto) => (
            <InfoCard key={producto.id}>
              <Text style={styles.productTitle}>{producto.nombre}</Text>
              <Text style={styles.description}>{producto.descripcion}</Text>
              <Text style={styles.productText}>Precio: ${producto.precio}</Text>
              <Text style={styles.productText}>Categoria: {producto.categoria}</Text>
              <Text style={styles.productText}>Artesano: {producto.artesano}</Text>

              <View style={styles.buttonGroup}>
                <View style={styles.buttonWrapper}>
                  <Button title="Editar" onPress={() => seleccionarProducto(producto)} />
                </View>
                <View style={styles.buttonWrapper}>
                  <Button
                    color="#dc2626"
                    title="Eliminar"
                    onPress={() => borrarProducto(producto.id)}
                  />
                </View>
              </View>
            </InfoCard>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffff',
    padding: 20,
    paddingBottom: 36,
  },
  status: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#d1d5db',
    borderRadius: 8,
    borderWidth: 1,
    color: '#111827',
    fontSize: 16,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  textArea: {
    minHeight: 82,
    textAlignVertical: 'top',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 6,
    marginBottom: 8,
  },
  buttonWrapper: {
    flex: 1,
  },
  emptyText: {
    color: '#4b5563',
    fontSize: 15,
    lineHeight: 22,
  },
  productTitle: {
    color: '#111827',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 8,
  },
  productText: {
    color: '#374151',
    fontSize: 15,
    marginBottom: 4,
  },
});
