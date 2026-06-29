import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProjectScreen } from '../screens/ProjectScreen';
import { SQLiteProductosScreen } from '../screens/SQLiteProductosScreen';
import { SkillsScreen } from '../screens/SkillsScreen';

export type RootTabParamList = {
  Inicio: undefined;
  Perfil: undefined;
  Habilidades: undefined;
  'Mi Proyecto': undefined;
  SQLite: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#6b7280',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarStyle: {
            height: 62,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Habilidades" component={SkillsScreen} />
        <Tab.Screen name="Mi Proyecto" component={ProjectScreen} />
        <Tab.Screen name="SQLite" component={SQLiteProductosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
