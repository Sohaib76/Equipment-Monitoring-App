import * as React from 'react';
import { Button, Image, View } from 'react-native';
import { Feather,Entypo } from '@expo/vector-icons';
import ImagePickerExample from './ImagePickerExample';
import {createStackNavigator, createAppContainer} from 'react-navigation'

class MainMenu extends React.Component {
 
  settingsPressed = () =>{
      console.log("Pressed")
  }

  render() {
    
    const navigation = this.props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          

       <Feather name="settings" size={32} onPress={()=> navigation.navigate('Settings')}/>

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