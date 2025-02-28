// BottomNav.js
import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Dashboard from './dashboard'; // Import Dashboard
import Transactions from './Transactions'; // Import Transactions

function BottomNav() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'dashboard', title: 'Dashboard', icon: 'home' },
    { key: 'transactions', title: 'Transactions', icon: 'list-numbered' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: () => <Dashboard />, // Render Dashboard when the first tab is selected
    transactions: () => <Transactions />, // Render Transactions when the second tab is selected
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}  // Use the renderScene map for dynamic tab content
    />
  );
}

export default BottomNav;
