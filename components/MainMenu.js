import * as React from 'react';
import { Text,  View , TouchableOpacity,AsyncStorage,StatusBar} from 'react-native';
import { Feather,Entypo,AntDesign } from '@expo/vector-icons';
import ImagePickerExample from './ImagePickerExample';
import {createStackNavigator, createAppContainer, NavigationEvents} from 'react-navigation'
import { Card, ListItem, Button, Icon ,Avatar,Image } from 'react-native-elements'
import CardMain from './CardMain';
import {Constants} from 'expo'






class MainMenu extends React.Component {

    


    constructor(props){
        super(props);
         
        this.state = {
            username : 'Mr.X',
            imageURL : null
        }
      
       
        console.log(this.state.imageURL)

        
    }
    
   
 
  settingsPressed = () =>{
      console.log("Pressed")
  }

  componentWillMount(){
    AsyncStorage.getItem("img").then((value) => {
        this.setState({imageURL: value});
    })
   console.log(this.state.imageURL + 'componentWillMount')
  
    

}







  

 
  //{/** Header vader */}

 

 
  static navigationOptions = { header: null }

  render() {
    
    const navigation = this.props.navigation

    const dashboardimg = require("../assets/images/dashboard.png")
    const alertimg = require("../assets/images/alert.png")
    const mapimg = require("../assets/images/map.png")
    const chatimg = require("../assets/images/chat.png")

    return (
       
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <NavigationEvents
                  onWillFocus={() => {
                    AsyncStorage.getItem("img").then((value) => {
                        this.setState({imageURL: value});
                    })
                  }}
                />

       
        <Card containerStyle={{shadowOffset:{width:0,height:2}, width:350, height:90,
        justifyContent:"center",shadowRadius:2,shadowOpacity:1, 
        elevation: 8, flex : 2
    }} >
         
            
           
            <View  style={{
                marign:15,flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
            <Avatar
                      rounded
                      size="large"
                      source={{
                          uri: this.state.imageURL
                      }}
                      />
           
           <View style={{margin:15, justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>
                     <Text style={{fontWeight:'bold',fontSize:20}}>Welcome Mr.X</Text>
                     <Text>xyz@gmail.com</Text>
                </View>
                <TouchableOpacity style={{margin:40, justifyContent:'center',alignItems:"flex-end"}}
                        onPress={()=> navigation.navigate('Settings')}>
                        <Feather name="settings" size={32} />
               </TouchableOpacity>
        </View>
        

        
        </Card>
        

        {/* *******************Cards*********************/}
       

        <View style={{flexDirection:"column", justifyContent:'center',
            alignItems:'center', flex: 20
    }}>
            
            <View style={{flex:10, flexDirection:'row',justifyContent: 'center', alignItems:'center'
        ,  alignSelf:'center'}}>
                <View style={{flex : 2, marginLeft:-8}}>
                <CardMain title="Dashboard" imgsrc={dashboardimg}/>
                </View>
                <View style= {{flex:2 , marginRight:16}}>
                    <CardMain title="Alerts" imgsrc={alertimg}/>
                </View>
            
            </View>

            <View style={{flex:10, flexDirection:'row',justifyContent: 'center', alignItems:'center',
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
               
                
            }
           
      
        },
        Settings : {
            screen: ImagePickerExample,
            navigationOptions: {
                title: "Settings",
                headerBackImage: ()=> 
                <AntDesign name="back" size={30} color='black'/>
                
                ,
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