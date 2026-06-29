import type { NavigatorScreenParams } from '@react-navigation/native';

export type ProductosStackParamList = {
  ProductosLista: undefined;
  ProductoDetalle: {
    id: number;
  };
};

export type RootTabParamList = {
  Inicio: undefined;
  Perfil: undefined;
  Habilidades: undefined;
  'Mi Proyecto': undefined;
  SQLite: undefined;
  Productos: NavigatorScreenParams<ProductosStackParamList>;
};
