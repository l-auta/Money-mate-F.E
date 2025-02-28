// BottomNav.js
import React ,{ useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Dashboard from './dashboard'; // Import Dashboard
import Transactions from './Transactions'; // Import Transactions

function BottomNav() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'dashboard', title: 'Dashboard', icon: 'home' },
    { key: 'transactions', title: 'Transactions', icon: 'format-list-numbered' },
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
      activeColor='#6d2323'
      shifting={true}
      barStyle={{
         backgroundColor: '#fffefb' ,
         height: '70',
         paddingBottom: 10, // Optional: padding customization
        }} 
      renderIcon={({ route, focused}) => (
        <MaterialCommunityIcons
          name={route.icon} // Use the icon name from the routes
          size={24}
          color={focused ? '#6d2323' : 'gray'} // Optional: focus color customization
        />
      )}
    />
  );
}

export default BottomNav;
