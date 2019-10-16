import React, { Component } from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';

import { ListDishs } from '../mockdata';
import Dish from '../components/Dish';

class ListDish extends Component {
   static navigationOptions = {
      title: 'Danh sách món ăn'
   }

   render() {
      let width = Dimensions.get('window').width;
      const jsxElements = ListDishs.map((item, index) => {
         return <View key={index} style={{ width: width - (width * 0.3 / 2) - 40, marginHorizontal: 20 }}>
            <Dish dish={item} />
         </View>
      })

      return (
         <ScrollView>
            <View style={{ flex: 0, alignItems: 'flex-end' }}>
               { jsxElements }
            </View>
         </ScrollView>
      );
   }
}

export default ListDish;