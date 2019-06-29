import * as React from 'react';
import { Text,  View , TouchableOpacity,AsyncStorage,StatusBar} from 'react-native';
import { Feather,Entypo,AntDesign } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon ,Avatar,Image } from 'react-native-elements'
import CardMain from './CardMain';
import {NavigationEvents} from 'react-navigation'
import Layout from '../constants/Layout';



export default class TitleBar extends React.Component {



    constructor(props){
        super(props);
         
        this.state = {
            username : null,
            imageURL : null,
            email : null
        }
  

        
    }


    componentWillMount(){
        AsyncStorage.getItem("img").then((value) => {
            this.setState({imageURL: value});
        })
   
    }

    render(){
        const navigation = this.props.navigation
        return(
            

            <View style={{  alignItems: 'center', justifyContent: 'flex-start',flexDirection:'column'
            ,backgroundColor:'black' , height:Layout.window.height/7.2}}>

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


                <Card containerStyle={{shadowOffset:{width:0,height:2}, width:Layout.window.width,height:Layout.window.height/7.2,
                        justifyContent:"space-around",shadowRadius:2,shadowOpacity:1, 
                        elevation: 8, alignItems:'stretch',flex:2,marginTop: -2,borderRadius:this.props.bradius
                    }} >
                        
                            
                            
                            <View  style={{
                                
                                flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                           
                           <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Avatar
                                    rounded
                                    size="large"
                                    source={{
                                        uri: this.state.imageURL
                                    }}
                                     
                                    // containerStyle={{ marginLeft: 20, marginBottom:5}}

                                    />
                        
                                <View style={{marginLeft:10,justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>
                                            <Text style={{fontWeight:'bold',fontSize:20}}>{this.props.message} {this.state.username}</Text>
                                            <Text>{this.state.email}</Text>
                                    </View>


                        </View>
                        <View style={{flexDirection:'row-reverse', alignItems:'flex-end'}}>
                                <TouchableOpacity style={{ justifyContent:'center',alignItems:"flex-start",margin:5}}
                                                onPress={()=> navigation.navigate('Settings')}>
                                                <Feather name="settings" size={32} />
                                    </TouchableOpacity>

                                    {this.props.chatIcon !== 'false'  &&
                                            <TouchableOpacity style={{ justifyContent:'flex-end',margin:5}}
                                            onPress={()=> navigation.navigate('Chat')}>
                                            <AntDesign name="wechat" size={32} />
                                        </TouchableOpacity>
                                    }
                                 
                        </View>
                                
                        </View>
                        

                        
                        </Card>






            </View>


           
        )
    }
}

