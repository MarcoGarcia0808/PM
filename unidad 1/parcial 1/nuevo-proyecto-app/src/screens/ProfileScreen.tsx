import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DataRow } from '../components/DataRow';
import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';
import { globalStyles } from '../styles/globalStyles';

const perfil = {
  nombre: 'Marco Resendiz',
  carrera: 'Programacion Movil',
  cuatrimestre: 1,
  promedio: 9.2,
  titulado: false,
  datoPendiente: null,
};

export function ProfileScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={globalStyles.screen}>
        <Header
          title="Perfil"
          subtitle="Datos personales usando tipos de datos basicos en TypeScript."
        />

        <View style={styles.imagesRow}>
          <View style={styles.imageBox}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300',
              }}
              style={styles.avatar}
            />
            <Text style={styles.imageLabel}>Imagen desde internet</Text>
          </View>

          <View style={styles.imageBox}>
            <Image source={require('../../assets/imagen-local.png')} style={styles.avatar} />
            <Text style={styles.imageLabel}>Imagen local</Text>
          </View>
        </View>

        <InfoCard>
          <DataRow label="Nombre string" value={perfil.nombre} />
          <DataRow label="Carrera string" value={perfil.carrera} />
          <DataRow label="Cuatrimestre number" value={perfil.cuatrimestre} />
          <DataRow label="Promedio number" value={perfil.promedio} />
          <DataRow label="Titulado boolean" value={perfil.titulado ? 'Si' : 'No'} />
          <DataRow
            label="Dato pendiente null"
            value={perfil.datoPendiente === null ? 'Sin registrar' : perfil.datoPendiente}
          />
        </InfoCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imagesRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  imageBox: {
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    backgroundColor: '#e5e7eb',
    borderRadius: 55,
    height: 110,
    width: 110,
  },
  imageLabel: {
    color: '#4b5563',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
});
