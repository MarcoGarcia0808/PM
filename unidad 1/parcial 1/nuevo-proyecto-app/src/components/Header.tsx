import { StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    color: '#111827',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#4b5563',
    fontSize: 16,
    marginTop: 8,
    lineHeight: 22,
  },
});
