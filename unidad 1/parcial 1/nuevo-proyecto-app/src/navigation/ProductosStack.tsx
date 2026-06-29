import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductoDetalleScreen } from '../screens/ProductoDetalleScreen';
import { ProductosListaScreen } from '../screens/ProductosListaScreen';
import type { ProductosStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<ProductosStackParamList>();

export function ProductosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductosLista"
        component={ProductosListaScreen}
        options={{ title: 'Productos' }}
      />
      <Stack.Screen
        name="ProductoDetalle"
        component={ProductoDetalleScreen}
        options={({ route }) => ({ title: `Detalle #${route.params.id}` })}
      />
    </Stack.Navigator>
  );
}
