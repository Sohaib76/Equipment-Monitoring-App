import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import { Feather,Entypo } from '@expo/vector-icons';
import ImagePickerExample from './ImagePickerExample';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import CardMain from './CardMain';


class MainMenu extends React.Component {
 
  settingsPressed = () =>{
      console.log("Pressed")
  }

  render() {
    
    const navigation = this.props.navigation

    const dashboardimg = require("../assets/images/dashboard.png")
    const alertimg = require("../assets/images/alert.png")
    const mapimg = require("../assets/images/map.png")
    const chatimg = require("../assets/images/chat.png")

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
        <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
            <Feather name="settings" size={32} />
     
        </TouchableOpacity>

        {/* *******************Cards*********************/}
       

        <View style={{flexDirection:"column",flexWrap: 'wrap', }}>
            
            <View style={{flex:4, flexDirection:'row',justifyContent: 'space-between',
        alignSelf: 'center',}}>
                <View style={{flex : 2, marginLeft:-8}}>
                <CardMain title="Dashboard" imgsrc={dashboardimg}/>
                </View>
                <View style= {{flex:2 , marginRight:16}}>
                    <CardMain title="Alerts" imgsrc={alertimg}/>
                </View>
            
            </View>

            <View style={{flex:4, flexDirection:'row',justifyContent: 'space-between',
        alignSelf: 'center',}}>
                <View style={{flex : 2, marginLeft:-8}}>
                <CardMain title="Map" imgsrc={mapimg}/>
                </View>
                <View style= {{flex:2 , marginRight:16}}>
                    <CardMain title="Chat" imgsrc={chatimg}/>
                </View>
            
            </View>
           
        
        </View>


      </View>
    );

    }
}


const StackNavigator = createStackNavigator(
    {
        //ROUTESSS
    
        Home : {
            screen: MainMenu,
           
            navigationOptions: {
                title: "Welcome"
            }
        },
        Settings : {
            screen: ImagePickerExample,
            navigationOptions: {
                title: "Settings",
                headerBackImage: ()=> <Entypo name="back" size={20} color='blue'/>,
            }
        },
        
    
    },
    {
        //STYLINGGG
        initialRouteName : "Home",
        
      
    }
    );
    
    
    const styles =  {
        buttn : {
           
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius : 5,
            width: 150,
            height: 80,
            margin : 20
        }
    }
    export default StackNavigatorMain = createAppContainer(StackNavigator);