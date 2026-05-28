import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type InfoCardProps = {
  children: ReactNode;
};

export function InfoCard({ children }: InfoCardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    marginBottom: 14,
    padding: 16,
  },
});
