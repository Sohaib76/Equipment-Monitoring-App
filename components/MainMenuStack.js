import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import MainMenu from './MainMenu.js'
import ImagePickerExample from './ImagePickerExample';
import { Feather,AntDesign ,MaterialIcons, Entypo} from '@expo/vector-icons';
import Alert from './AlertClass.js';
import Dashboard from './DashboardClass.js';
import Map from './MapClass.js';
import Chat from './ChatClass.js';
import DashboardFurtherScreens from './DashboardFurtherScreens.js';
import Settings from './SettingsClass.js';
import AlertHistory from './AlertHistory.js';



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
        Alerts : {
            screen: Alert,
           
        },
        Dashboard : {
            screen: Dashboard,
           
        },
        DashboardFurtherScreens:{
            screen : DashboardFurtherScreens
        },
        AlertHistory:{
            screen: AlertHistory,
          
            
            navigationOptions: {
                
                title: "Interventions ",
                headerRight: (
                    <TouchableOpacity  style={{flexDirection:'row',margin:10}} onPress={() => alert('Right Menu Clicked')}>
                        
                        <MaterialIcons name="search" color="black"  size={25}/>
                        <Entypo name="message" color="black" size={25}/>
                    </TouchableOpacity>
                  ),
            }
        },
        Map : {
            screen: Map,
            navigationOptions: {
                title: "Map ",
                
            }
           
        },
        Chat : {
            screen: Chat,
           
        },
        Settings : {
            screen: ImagePickerExample,
            navigationOptions: {
                title: "Settings",
                headerBackImage: ()=> <AntDesign name="back" size={30} color='black'/>,
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