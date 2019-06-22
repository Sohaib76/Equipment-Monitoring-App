import * as React from 'react';
import { Text,  View , TouchableOpacity,AsyncStorage,StatusBar} from 'react-native';
import { Feather,Entypo,AntDesign } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon ,Avatar,Image } from 'react-native-elements'
import CardMain from './CardMain';
import {NavigationEvents} from 'react-navigation'



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
            

            <View style={{ flex: 0.18, alignItems: 'center', justifyContent: 'flex-start'
            ,backgroundColor:'black' }}>

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
                                    <Text style={{fontWeight:'bold',fontSize:20}}>{this.props.message} {this.state.username}</Text>
                                    <Text>{this.state.email}</Text>
                            </View>
                                <TouchableOpacity style={{margin:40, justifyContent:'center',alignItems:"flex-end"}}
                                        onPress={()=> navigation.navigate('Settings')}>
                                        <Feather name="settings" size={32} />
                            </TouchableOpacity>
                        </View>
                        

                        
                        </Card>






            </View>


           
        )
    }
}

