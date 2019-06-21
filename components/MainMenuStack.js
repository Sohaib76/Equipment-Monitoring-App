import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import MainMenu from './MainMenu.js'
import ImagePickerExample from './ImagePickerExample';



const StackNavigator = createStackNavigator(
    {
        //ROUTESSS
    
        Home : {
            screen: MainMenu,
           
            navigationOptions:{
                
                    // headerTitle: <Text>Post a Title</Text>,
                    // headerRight: (
                    //     <TouchableOpacity style={{margin:15, justifyContent:'center',alignItems:'center'}}
                    //     onPress={()=> navigation.navigate('Settings')}>
                    //         <Feather name="settings" size={32} />
                    
                    //     </TouchableOpacity>
                     
                    
               
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
    export default StackNavigatorMainn = createAppContainer(StackNavigator);