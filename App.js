import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListDish from './screens/ListDish';
import Menu from './screens/Menu';


const RootStack = createStackNavigator(
  {
    Home: Menu,
    Detail: ListDish
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);


export default function App() {

  return (
    <AppContainer />
  );
}

