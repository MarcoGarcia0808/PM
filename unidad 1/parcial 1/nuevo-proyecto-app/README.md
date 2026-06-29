# Nuevo Proyecto App

Aplicacion movil academica creada con Expo, React Native y TypeScript para la entrega del primer parcial de Programacion Movil.

## Objetivo

Presentar una app funcional con menu inferior, pantallas informativas, CRUD SQLite y una actividad de navegacion anidada para productos.

## Tecnologias utilizadas

- Expo
- React Native
- TypeScript
- React Navigation
- npm
- Git/GitHub

## Diagrama de navegacion

```text
App
└── NavigationContainer
    └── BottomTabs
        ├── Inicio
        ├── Perfil
        ├── Habilidades
        ├── Mi Proyecto
        ├── SQLite
        └── Productos
            └── ProductosStack
                ├── ProductosLista
                └── ProductoDetalle
```

## Navegacion anidada

`App.tsx` mantiene el punto de entrada principal y monta `BottomTabs`. Dentro de `BottomTabs.tsx` existe un solo `NavigationContainer`; ahi se registran las pestanas principales de la aplicacion.

La pestana `Productos` no abre una pantalla simple, sino un Stack propio definido en `src/navigation/ProductosStack.tsx`. Ese Stack contiene:

- `ProductosLista`: muestra la lista de productos y navega al detalle enviando `id`.
- `ProductoDetalle`: recibe `route.params.id`, busca el producto correspondiente y muestra su informacion.

El flujo esperado es:

```text
Bottom Tabs -> Productos -> Lista de productos -> Detalle del producto -> Regresar
```

## Versiones de React Navigation

El proyecto usa React Navigation 7 con `@react-navigation/native` y `@react-navigation/bottom-tabs`. Para la navegacion anidada se agrego `@react-navigation/native-stack`, que pertenece a la misma familia de paquetes y evita mezclar implementaciones incompatibles.

El conflicto de versiones se evito revisando las dependencias reales del proyecto correcto antes de integrar el Stack. No se creo otra app ni otro `NavigationContainer`; la navegacion quedo conectada dentro de la estructura existente.

## Estructura relevante

```text
nuevo-proyecto-app/
├── App.tsx
├── package.json
├── README.md
└── src/
    ├── components/
    ├── navigation/
    │   ├── BottomTabs.tsx
    │   └── ProductosStack.tsx
    ├── screens/
    │   ├── HomeScreen.tsx
    │   ├── ProductoDetalleScreen.tsx
    │   ├── ProductosListaScreen.tsx
    │   ├── ProfileScreen.tsx
    │   ├── ProjectScreen.tsx
    │   ├── SkillsScreen.tsx
    │   └── SQLiteProductosScreen.tsx
    ├── styles/
    └── types/
        ├── navigation.ts
        ├── productoDB.ts
        └── productos.ts
```

## Requisitos previos

- Node.js instalado
- npm instalado
- Expo disponible mediante `npx expo`
- Expo Go instalado en el telefono si se desea probar en dispositivo fisico

## Instalar dependencias

```bash
npm install
```

## Ejecutar el proyecto

```bash
npx expo start
```

Tambien se pueden usar estos comandos:

```bash
npm run android
npm run ios
npm run web
```

## Probar Productos

1. Abre la app con `npx expo start`.
2. En el menu inferior entra a `Productos`.
3. En la lista presiona `Ver detalle`.
4. Verifica que el detalle muestre `ID`, `Producto`, `Descripcion` y `Precio`.
5. Usa el boton de regreso del encabezado para volver a la lista.
