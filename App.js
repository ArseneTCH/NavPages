import * as React from 'react';
import { View, Text,Button ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function HomeScreen({navigation}) {
  return (
    <View style={styles.content}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details..."
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View style={styles.content}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button style={{marginTop:50}} title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button style={styles.btnstyle} title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" composant={HomeScreen}> </Drawer.Screen>
    </Drawer.Navigator>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles =StyleSheet.create({
  content:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
  btnstyle:{},
  
});

export default App;