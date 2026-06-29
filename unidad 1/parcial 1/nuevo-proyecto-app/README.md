## Actividad: Navegación Anidada

En esta actividad se implementó navegación anidada dentro del proyecto integrador utilizando Bottom Tabs y Stack Navigator. La aplicación ya contaba con navegación por pestañas, por lo que se agregó una pestaña llamada **Productos**, dentro de la cual se integró un Stack con dos pantallas: una pantalla de lista y una pantalla de detalle.

El flujo implementado permite que el usuario entre a la pestaña Productos, visualice una lista de productos y seleccione uno mediante el botón **Ver detalle**. Al presionar dicho botón, la aplicación navega hacia la pantalla de detalle enviando como parámetro el `id` del producto seleccionado.

### Diagrama de navegación

```txt
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

### Flujo de navegación

```txt
Pestañas → Productos → Lista de productos → Detalle del producto → Regreso
```

### Paso de parámetros

Desde la pantalla de lista se navega hacia la pantalla de detalle enviando el identificador del producto seleccionado:

```ts
navigation.navigate("ProductoDetalle", { id: producto.id });
```

En la pantalla de detalle se recibe el parámetro mediante `route.params` y se utiliza para mostrar la información correspondiente al producto seleccionado.

### Reflexión sobre versiones

Durante la implementación se revisó que las dependencias de React Navigation fueran compatibles entre sí. Esto es importante porque si se mezclan versiones diferentes de `@react-navigation/native`, `@react-navigation/bottom-tabs` y el paquete de Stack, el proyecto puede presentar errores de compilación.

Para evitar conflictos, se utilizó la misma familia de React Navigation que ya estaba instalada en el proyecto y se evitó duplicar el `NavigationContainer`. De esta manera, el Stack de Productos quedó anidado correctamente dentro de una pestaña del Bottom Tabs.
