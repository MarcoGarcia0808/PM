import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';
import { globalStyles } from '../styles/globalStyles';

const habilidades: string[] = [
  'React Native',
  'TypeScript',
  'Expo',
  'JavaScript',
  'GitHub',
];

export function SkillsScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={globalStyles.screen}>
        <Header
          title="Habilidades"
          subtitle="Tecnologias y herramientas utilizo para construir aplicaciones moviles."
        />

        <InfoCard>
          <Text style={styles.intro}>
            Estas habilidades se muestran con los arreglos y el map
          </Text>

          <View style={styles.skillsContainer}>
            {habilidades.map((habilidad) => (
              <View key={habilidad} style={styles.skillChip}>
                <Text style={styles.skillText}>{habilidad}</Text>
              </View>
            ))}
          </View>
        </InfoCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  intro: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillChip: {
    backgroundColor: '#dbeafe',
    borderColor: '#93c5fd',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  skillText: {
    color: '#1e3a8a',
    fontSize: 14,
    fontWeight: '600',
  },
});
