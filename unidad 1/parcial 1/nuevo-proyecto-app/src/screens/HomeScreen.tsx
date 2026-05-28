import { StyleSheet, Text, View } from 'react-native';

import { Header } from '../components/Header';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Nuevo Proyecto App"
        subtitle="Base inicial con Expo, React Native y TypeScript"
      />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pantalla principal</Text>
        <Text style={styles.cardText}>
          Este proyecto esta organizado para crecer con componentes, pantallas,
          servicios, hooks, estilos y tipos separados.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 20,
  },
  cardTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardText: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});
