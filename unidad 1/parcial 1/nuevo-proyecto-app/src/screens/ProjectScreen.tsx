import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DataRow } from '../components/DataRow';
import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';
import { globalStyles } from '../styles/globalStyles';

const proyecto = {
  nombre: 'Portafolio Movil',
  version: '1.0.0',
  descripcion:
    'Aplicacion movil desarrollada con Expo, React Native y TypeScript para presentar informacion personal, habilidades y datos de un proyecto academico.',
  repositorio: 'https://github.com/MarcoGarcia0808/PM',
  activo: true,
};

export function ProjectScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={globalStyles.screen}>
        <Header
          title="Mi APP aqui en github"
          subtitle="Informacion del proyecto integrador usando un objeto de TS."
        />

        <InfoCard>
          <DataRow label="Nombre" value={proyecto.nombre} />
          <DataRow label="Version" value={proyecto.version} />
          <DataRow label="Descripcion" value={proyecto.descripcion} />
          <DataRow label="Repositorio" value={proyecto.repositorio} />
          <DataRow label="Estado" value={proyecto.activo ? 'Activo' : 'Inactivo'} />
        </InfoCard>

        <InfoCard>
          <Text style={styles.codeTitle}>Objeto completo con JSON.stringify()</Text>
          <Text style={styles.code}>{JSON.stringify(proyecto, null, 2)}</Text>
        </InfoCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  codeTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  code: {
    backgroundColor: '#111827',
    borderRadius: 8,
    color: '#f9fafb',
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 19,
    padding: 12,
  },
});
