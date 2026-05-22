import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// ── Variables con distintos tipos de datos ──
const nombre: string = "Enrique Peña";
const carrera: string = "Ing. en Sistemas Computacionales";
const cuatrimestre: number = 9;
const promedio: number = 9.2;
const titulado: boolean = false;

export default function App() {
return (
<View style={styles.container}>

<Text style={styles.titulo}>{nombre}</Text>
<Text style={styles.subtitulo}>{carrera}</Text>
<Text style={styles.dato}>Cuatrimestre: {cuatrimestre}</Text>
<Text style={styles.dato}>Promedio: {promedio}</Text>
<Text style={styles.dato}>Titulado: {String(titulado)}</Text>

<StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
titulo: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 4,
},
subtitulo: {
fontSize: 14,
color: '#666',
marginBottom: 16,
},
dato: {
fontSize: 16,
marginBottom: 6,
},
});