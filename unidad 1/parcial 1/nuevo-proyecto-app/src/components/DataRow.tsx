import { StyleSheet, Text, View } from 'react-native';

type DataRowProps = {
  label: string;
  value: string | number;
};

export function DataRow({ label, value }: DataRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  label: {
    color: '#4b5563',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  value: {
    color: '#111827',
    fontSize: 16,
  },
});
