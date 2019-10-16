import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ScrollView } from 'react-native';

import DishType from '../components/DishType';
import { DishTypes } from '../mockdata';

class Menu extends Component {
   static navigationOptions = {
      title: 'Danh mục'
   }

   render() {
      let width = Dimensions.get('window').width;

      const jsxElements = DishTypes.map((item, index) => {
         return <View key={index} style={{ width: width - (width * 0.3 / 2) - 40, marginHorizontal: 20 }}>
            <DishType dishType={item} navigation={this.props.navigation} />
         </View>
      });

      return (
         <ScrollView>
            <View style={{ flex: 0, alignItems: 'flex-end' }}>
               { jsxElements }
            </View>
         </ScrollView>
      );
   }
}

export default Menu;