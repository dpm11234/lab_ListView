import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const uri = 'https://image-us.eva.vn/upload/1-2018/images/2018-01-02/1-1514830758-127-width600height450.jpg'

export default function DishType(props) {
   let width = Dimensions.get('window').width;

   const { title, dish, sale, image } = props.dishType;

   return (
      <TouchableOpacity style={{ flex: 1 }}
         onPress={() => {
            props.navigation.navigate('Detail');
         }}
      
      >
         <View style={{ flex: 0, flexDirection: 'row', marginTop: 20, borderColor: 'red', borderWidth: 2, borderRadius: 20 }}>
            <View style={{ flex: 0, justifyContent: 'center' }}>
               <Image
                  source={{ uri: image }}
                  style={{
                     position: 'absolute',
                     width: width * 0.3,
                     height: width * 0.3,
                     borderRadius: 70,
                     left: -(width * 0.3 / 2)
                  }}
               />
            </View>
            <View style={{ width: '80%', paddingVertical: 20, paddingLeft: width * 0.3 / 2 + 15 }}>
               <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
               <Text style={{ fontSize: 25 }}>{ dish } sản phẩm</Text>
               <Text style={{ fontSize: 25 }}>{ sale } đang giảm giá</Text>
            </View>
            <View style={{ width: '20%' }}>
               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="chevron-right" size={30} />
               </View>
            </View>
         </View>
      </TouchableOpacity>
   );
}

