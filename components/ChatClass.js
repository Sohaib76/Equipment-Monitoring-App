import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import MyChat from './GiftedChatClass';
import TitleBar from './TitleBar';


export default class Chat extends React.Component {
 
  
  static navigationOptions = { header: null }
  render() {
    const navigation = this.props.navigation

    return (
              <View style={{flex:1}}>
                  <TitleBar message={"Chat "} navigation={navigation} chatIcon={"false"}/>
                  <MyChat/>
              </View>
                
    )
           
     }
}