import * as React from 'react';
import {  Image, View, AsyncStorage, TouchableOpacity,Text } from 'react-native';
//import {  Badge ,Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import { Card, ListItem, Button, Icon,Tooltip,Overlay ,Input} from 'react-native-elements'
import Layout from '../constants/Layout'




export default class OverlayClass extends React.Component {
    state = {
        usernameTemp: '',
        username: null,
        isVisible: false
      };


      showPopup = ()=>{
        this.setState({isVisible: true})
         
      }

      usernameStateEdit = (e)=>{
        this.setState({usernameTemp: e })
      }

      _editUserName = async()=>{
        this.setState({username: this.state.usernameTemp , usernameTemp: '', isVisible: false })
        await AsyncStorage.setItem("uname", this.state.usernameTemp);
     
      }

      componentDidMount() {

        AsyncStorage.getItem("uname").then((value) => {
              this.setState({"username": value});
          }).done();
         
      }



    render(){
        return(
            <Overlay 
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            
            width= {Layout.window.width - 10}
            height={150}
            
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
            >
            <View>
              <Text style={{margin:10}}>Enter Your New UserName!</Text>
              <Input
                placeholder='User Name'
                shake={true}
                onChangeText = {(e) => this.usernameStateEdit(e)}
                value = {this.state.usernameTemp}
                maxLength = {10}
            
              />
              <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                <TouchableOpacity onPress={this._editUserName}>
                  <Text>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ isVisible: false })}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            }
            
            
            </Overlay>
        )
    }

}