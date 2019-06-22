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
            username : null,
            imageURL : null,
            email : null
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
    const dashboardimg2 = require("../assets/images/dashboardOrange.png")
    const alertimg2 = require("../assets/images/alertRed.png")
    const alertimg = require("../assets/images/alert.png")
    const mapimg = require("../assets/images/map.png")
    const mapimg2 = require("../assets/images/mapGreen.png")
    const chatimg = require("../assets/images/chat.png")
    const chatimg2 = require("../assets/images/chatBlue.png")

    return (
       
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'
       ,backgroundColor:'black' }}>
         {/* #050400 */}
        <NavigationEvents
                  onWillFocus={() => {
                    AsyncStorage.getItem("img").then((value) => {
                        this.setState({imageURL: value});
                    })
                    AsyncStorage.getItem("uname").then((value) => {
                      this.setState({username: value});
                  })
                  AsyncStorage.getItem("emal").then((value) => {
                    this.setState({email: value});
                })
                  }}
                />

       
        <Card containerStyle={{shadowOffset:{width:0,height:2}, width:360, height:100,
        justifyContent:"space-around",shadowRadius:2,shadowOpacity:1, 
        elevation: 8, alignItems:'center',flex:2,marginTop:-3
    }} >
         
            
           
            <View  style={{
              
                marign:20,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
            <Avatar
                      rounded
                      size="large"
                      source={{
                          uri: this.state.imageURL
                      }}
                      containerStyle={{ marginLeft: 20, marginBottom:5}}

                      />
           
           <View style={{margin:15, justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>
                     <Text style={{fontWeight:'bold',fontSize:20}}>Welcome {this.state.username}</Text>
                     <Text>{this.state.email}</Text>
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
        ,  alignSelf:'center',marginTop:-20}}>
                <View style={{flex : 5, marginLeft:-8}}>
                <CardMain title="Dashboard" imgsrc={dashboardimg2} 
                navigation={navigation} whereTonavigate="Dashboard"
                bgColor = "#e9a219"
                />
               
                </View>
                <View style= {{flex:5 , marginRight:16}}>
                    <CardMain bgColor= "#cf1103" title="Alerts" imgsrc={alertimg2} navigation={navigation} whereTonavigate="Alerts"/>

                </View>
            
            </View>

            <View style={{flex:10, flexDirection:'row',justifyContent: 'center', alignItems:'center',
        alignSelf: 'center', marginTop:-40}}>
                <View style={{flex : 5, marginLeft:-8, }}>
                <CardMain title="Map" imgsrc={mapimg2} navigation={navigation}
                 whereTonavigate="Map"
                 bgColor = "#1b9c24"
                 />
                
                </View>
                <View style= {{flex:5 , marginRight:16}}>
                    <CardMain bgColor="#00a7ed" title="Chat" imgsrc={chatimg2} navigation={navigation} whereTonavigate="Chat"/>
                </View>
            
            </View>
           
        
        </View>


      </View>
    );

    }
}


