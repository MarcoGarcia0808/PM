import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InfoCard } from '../components/InfoCard';
import { globalStyles } from '../styles/globalStyles';
import type { ProductosStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<ProductosStackParamList, 'ProductosLista'>;

export type ProductoActividad = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
};

export const productosActividad: ProductoActividad[] = [
  {
    id: 1,
    nombre: 'Mochila urbana',
    descripcion: 'Mochila resistente con compartimento para laptop y cierre reforzado.',
    precio: 799,
  },
  {
    id: 2,
    nombre: 'Termo deportivo',
    descripcion: 'Termo de acero inoxidable para mantener bebidas frias o calientes.',
    precio: 329,
  },
  {
    id: 3,
    nombre: 'Audifonos inalambricos',
    descripcion: 'Audifonos compactos con estuche de carga y conexion Bluetooth.',
    precio: 549,
  },
];

export function ProductosListaScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={globalStyles.screen}>
        {productosActividad.map((producto) => (
          <InfoCard key={producto.id}>
            <View style={styles.cardHeader}>
              <Text style={styles.productName}>{producto.nombre}</Text>
              <Text style={styles.price}>${producto.precio}</Text>
            </View>
            <Text style={styles.description}>{producto.descripcion}</Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => navigation.navigate('ProductoDetalle', { id: producto.id })}
              style={({ pressed }) => [styles.detailButton, pressed && styles.detailButtonPressed]}
            >
              <Text style={styles.detailButtonText}>Ver detalle</Text>
            </Pressable>
          </InfoCard>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  productName: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: '#047857',
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
  },
  detailButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 44,
    paddingHorizontal: 16,
  },
  detailButtonPressed: {
    opacity: 0.8,
  },
  detailButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});
