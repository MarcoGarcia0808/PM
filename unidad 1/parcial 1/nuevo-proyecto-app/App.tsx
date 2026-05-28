import { StatusBar } from 'expo-status-bar';

import { BottomTabs } from './src/navigation/BottomTabs';

export default function App() {
  return (
    <>
      <BottomTabs />
      <StatusBar style="auto" />
    </>
  );
}
