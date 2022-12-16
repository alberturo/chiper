import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewScreen from './src/screens/NewScreen';
import TopScreen from './src/screens/TopScreen';
import PopularScreen from './src/screens/PopularScreen';
import HotScreen from './src/screens/HotScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      {/* <NavigationContainer
        documentTitle={{
          formatter: (options, route) =>
            `${options?.title ?? route?.name} - My Cool App`,
        }}
        children={undefined}></NavigationContainer> */}

      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={NewScreen}
          options={{title: 'reddit/r/programing'}}
        />
      </Stack.Navigator> */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="New" component={NewScreen} />
          <Tab.Screen name="Top" component={TopScreen} />
          <Tab.Screen name="Popular" component={PopularScreen} />
          <Tab.Screen name="Hot" component={HotScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
