# Nuevo Proyecto App

Aplicacion movil academica creada con Expo, React Native y TypeScript para la entrega del primer parcial de Programacion Movil.

## Objetivo

Presentar una app funcional con tres pantallas conectadas por un menu inferior: perfil personal, habilidades y datos de un proyecto integrador.

## Tecnologias utilizadas

- Expo
- React Native
- TypeScript
- React Navigation
- npm
- Git/GitHub

## Estructura de carpetas

```text
nuevo-proyecto-app/
├── assets/
├── src/
│   ├── components/
│   │   ├── DataRow.tsx
│   │   ├── Header.tsx
│   │   └── InfoCard.tsx
│   ├── navigation/
│   │   └── BottomTabs.tsx
│   ├── screens/
│   │   ├── ProfileScreen.tsx
│   │   ├── SkillsScreen.tsx
│   │   └── ProjectScreen.tsx
│   ├── styles/
│   │   └── globalStyles.ts
│   └── types/
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Requisitos previos

- Node.js instalado
- npm instalado
- Expo disponible mediante `npx expo`
- Expo Go instalado en el telefono si se desea probar en dispositivo fisico

## Pantallas

- `ProfileScreen.tsx`: muestra una foto desde internet, una imagen local y datos personales.
- `SkillsScreen.tsx`: muestra un arreglo `string[]` de habilidades usando `.map()`.
- `ProjectScreen.tsx`: muestra los datos del proyecto integrador campo por campo y tambien con `JSON.stringify()`.

## Tipos de datos utilizados

- `string`: nombre, carrera, version y descripcion.
- `number`: cuatrimestre y promedio.
- `boolean`: titulado y activo.
- `null`: dato pendiente.
- `string[]`: lista de habilidades.
- `object`: perfil y proyecto.

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

## Estado actual

El proyecto cumple una base funcional para el primer parcial. Actualmente incluye:

- Tres pantallas conectadas por menu inferior.
- Imagen desde internet e imagen local.
- Uso de `.map()` para mostrar habilidades.
- Uso de `JSON.stringify()` para mostrar el objeto del proyecto.
- Componentes reutilizables y estilos con `StyleSheet`.

## Checklist de entrega

- [x] 3 pantallas funcionando
- [x] Menu inferior funcional
- [x] Imagen desde internet
- [x] Imagen local
- [x] Uso de `.map()`
- [x] Uso de `JSON.stringify()`
- [x] Estilos con `StyleSheet`
- [ ] Proyecto actualizado en repositorio
