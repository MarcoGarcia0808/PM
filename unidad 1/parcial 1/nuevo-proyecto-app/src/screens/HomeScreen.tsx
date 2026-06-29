import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DataRow } from '../components/DataRow';
import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';
import { useProductos } from '../hooks/useProductos';
import { globalStyles } from '../styles/globalStyles';

export function HomeScreen() {
  const { productos, cargando, getArtesano } = useProductos();

  if (cargando) {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Cargando productos...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={globalStyles.screen}>
        <Header
          title="Artisan Auction"
          subtitle="Subastas de productos artesanales con informacion del artesano."
        />

        {productos.map((producto) => {
          const artesano = getArtesano(producto.artesanoId);

          return (
            <InfoCard key={producto.id}>
              <Text style={styles.cardTitle}>{producto.nombre}</Text>
              <Text style={styles.cardText}>{producto.descripcion}</Text>
              <DataRow label="Categoria" value={producto.categoria} />
              <DataRow label="Precio inicial" value={`$${producto.precioInicial}`} />
              <DataRow label="Artesano" value={artesano?.nombre ?? 'Sin artesano'} />
              <DataRow label="Comunidad" value={artesano?.comunidad ?? 'No disponible'} />
              <DataRow
                label="Especialidad"
                value={artesano?.especialidad ?? 'No disponible'}
              />
            </InfoCard>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  loadingText: {
    color: '#4b5563',
    fontSize: 16,
    marginTop: 12,
  },
  cardTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
});
