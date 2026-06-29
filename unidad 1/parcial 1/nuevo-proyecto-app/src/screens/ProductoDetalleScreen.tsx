import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DataRow } from '../components/DataRow';
import { InfoCard } from '../components/InfoCard';
import { globalStyles } from '../styles/globalStyles';
import type { ProductosStackParamList } from '../types/navigation';
import { productosActividad } from './ProductosListaScreen';

type Props = NativeStackScreenProps<ProductosStackParamList, 'ProductoDetalle'>;

export function ProductoDetalleScreen({ route }: Props) {
  const { id } = route.params;
  const producto = productosActividad.find((item) => item.id === id);

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={globalStyles.screen}>
        <InfoCard>
          <Text style={styles.title}>Detalle del producto</Text>
          <DataRow label="ID" value={String(id)} />
          <DataRow label="Producto" value={producto?.nombre ?? 'Producto no encontrado'} />
          <DataRow
            label="Descripcion"
            value={producto?.descripcion ?? 'No hay informacion para este producto.'}
          />
          <DataRow label="Precio" value={producto ? `$${producto.precio}` : 'No disponible'} />
        </InfoCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#111827',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
  },
});
