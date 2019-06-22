import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class Dashboard extends React.Component {
 
  

  render() {
    

    return (
 
        <View style={{flex:1, flexDirection:'column',justifyContent:'space-evenly', alignItems:'center'}}>
          <View style={{backgroundColor:'yellow'}}></View>
          <View style={{backgroundColor:'red'}}></View>
          <View style={{backgroundColor:'black'}}></View>
          <Text>PP</Text>
        </View>
    )
           
     }
}