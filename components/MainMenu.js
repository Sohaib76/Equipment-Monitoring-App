import * as React from 'react';
import { Text,  View , TouchableOpacity,AsyncStorage,StatusBar} from 'react-native';
import { Feather,Entypo,AntDesign } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon ,Avatar,Image } from 'react-native-elements'
import CardMain from './CardMain';
import {NavigationEvents} from 'react-navigation'



export default class MainMenu extends React.Component {

  constructor(props){
        super(props);
         
        this.state = {
            username : 'Mr.X',
            imageURL : null
        }
      
       
       // console.log(this.state.imageURL)

        
    }
    
   
 
  settingsPressed = () =>{
      console.log("Pressed")
  }

  componentWillMount(){
    AsyncStorage.getItem("img").then((value) => {
        this.setState({imageURL: value});
    })
  // console.log(this.state.imageURL + 'componentWillMount')
  
    

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

       
        <Card containerStyle={{shadowOffset:{width:0,height:2}, width:350, height:100,
        justifyContent:"center",shadowRadius:2,shadowOpacity:1, 
        elevation: 8, flex : 2
    }} >
         
            
           
            <View  style={{
                marign:20,flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
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
                <CardMain title="Dashboard" imgsrc={dashboardimg} navigation={navigation} whereTonavigate="Dashboard"/>
                </View>
                <View style= {{flex:2 , marginRight:16}}>
                    <CardMain title="Alerts" imgsrc={alertimg} navigation={navigation} whereTonavigate="Alerts"/>

                </View>
            
            </View>

            <View style={{flex:10, flexDirection:'row',justifyContent: 'center', alignItems:'center',
        alignSelf: 'center',}}>
                <View style={{flex : 2, marginLeft:-8}}>
                <CardMain title="Map" imgsrc={mapimg} navigation={navigation} whereTonavigate="Map"/>
                </View>
                <View style= {{flex:2 , marginRight:16}}>
                    <CardMain title="Chat" imgsrc={chatimg} navigation={navigation} whereTonavigate="Chat"/>
                </View>
            
            </View>
           
        
        </View>


      </View>
    );

    }
}


