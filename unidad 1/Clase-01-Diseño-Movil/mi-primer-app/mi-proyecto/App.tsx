import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

type Pantalla = 'menu' | 'perfil' | 'libre';

const nombre: string = "Enrique Pena";
const carrera: string = "Ing. en Sistemas Computacionales";
const cuatrimestre: number = 9;
const promedio: number = 9.2;
const titulado: boolean = false;

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>('menu');

  if (pantalla === 'perfil') {
    return (
      <View style={styles.container}>

        {/* Imagen desde internet */}
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Drawing_of_Venus_Flytrap.jpg/330px-Drawing_of_Venus_Flytrap.jpg',
          }}
          style={styles.avatar}
        />

        <Text style={styles.titulo}>{nombre}</Text>

        <Text style={styles.subtitulo}>
          {carrera}
        </Text>

        <Text style={styles.dato}>
          Cuatrimestre: {cuatrimestre}
        </Text>

        <Text style={styles.dato}>
          Promedio: {promedio}
        </Text>

        <Text style={styles.dato}>
          Titulado: {titulado ? 'Si' : 'No'}
        </Text>

        <Pressable style={styles.botonSecundario} onPress={() => setPantalla('menu')}>
          <Text style={styles.textoBotonSecundario}>Volver al menu</Text>
        </Pressable>

        <StatusBar style="auto" />
      </View>
    );
  }

  if (pantalla === 'libre') {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Pantalla libre</Text>
        <Text style={styles.subtitulo}>Mis intereses</Text>

        <View style={styles.tarjeta}>
          <Text style={styles.dato}>Me gusta aprender desarrollo movil.</Text>
          <Text style={styles.dato}>Estoy practicando componentes, estilos y navegacion.</Text>
          <Text style={styles.dato}>Esta pantalla fue agregada como consideracion libre.</Text>
        </View>

        <Pressable style={styles.botonSecundario} onPress={() => setPantalla('menu')}>
          <Text style={styles.textoBotonSecundario}>Volver al menu</Text>
        </Pressable>

        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menu principal</Text>
      <Text style={styles.subtitulo}>Selecciona una pantalla</Text>

      <Pressable style={styles.boton} onPress={() => setPantalla('perfil')}>
        <Text style={styles.textoBoton}>Ir a perfil</Text>
      </Pressable>

      <Pressable style={styles.boton} onPress={() => setPantalla('libre')}>
        <Text style={styles.textoBoton}>Ir a pantalla libre</Text>
      </Pressable>

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
    padding: 24,
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },

  dato: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },

  boton: {
    width: '100%',
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botonSecundario: {
    borderColor: '#2563eb',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 18,
  },

  textoBotonSecundario: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: 'bold',
  },

  tarjeta: {
    width: '100%',
    backgroundColor: '#f3f4f6',
    padding: 18,
    borderRadius: 8,
  },
});
