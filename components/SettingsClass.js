import * as React from 'react';
import {  Image, View, AsyncStorage, TouchableOpacity,Text,KeyboardAvoidingView } from 'react-native';
import {ImagePicker, Permissions,Constants} from 'expo';
//import {  Badge ,Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {MaterialCommunityIcons,MaterialIcons,Entypo, FontAwesome} from '@expo/vector-icons'
import { Card, ListItem, Button, Tooltip,Overlay ,Input} from 'react-native-elements'
import Layout from '../constants/Layout'
import SettingTopCard from './SettingsTopCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import Alert from './AlertClass';






export default class Settings extends React.Component {
  state = {
    image: null,
    usernameTemp: '',
    username: null,
  
    email: null,
    emailTemp: '',
    password: null,
    passTemp: ''
  };




  clicked = () =>{
      Alert("Oee")
  }

  usernameStateEdit = (e)=>{
    this.setState({usernameTemp: e })
  }
  emailStateEdit = (e)=>{
    this.setState({emailTemp: e })
  }
  passwordStateEdit = (e)=>{
    this.setState({passTemp: e })
  }

 

  render() {
    let { image } = this.state;
    
    
    return (
      <KeyboardAvoidingView style={{ flex: 3, alignItems: "stretch", justifyContent: 'center' ,flexDirection:'column'}} behavior="padding" enabled>

     
        


        <View style={{flex:0.75 ,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity  style={{width: 130, height: 130 , borderRadius:65 
             }} 
            onPress={this._pickImage}
            activeOpacity={0.8}
            >
            {/* <Button
                title = "Pick an image from gallery"
                onPress={this._pickImage}
            /> */}
        
        

            
            <Image source={{ uri: image }} style={{ width: 130, height: 130 ,borderRadius:60
            }} />
            
            
    
            </TouchableOpacity> 

        </View>
        
        <View style={{flex:1.25, justifyContent:'space-around'}}>
        <Input
            placeholder={this.state.username}
            textContentType = 'name' 
            shake={true}
            onChangeText = {(e) => this.usernameStateEdit(e)}
            value = {this.state.usernameTemp}
            maxLength = {10}
            leftIcon={
            <Icon
             name='user'
            size={24}
            color='black'

            
         />
         
        
        }
        leftIconContainerStyle = {{margin:10}}
        
        />



            
        <Input
            placeholder={this.state.email}
            textContentType = 'emailAddress' 
            shake={true}
            onChangeText = {(e) => this.emailStateEdit(e)}
            value = {this.state.emailTemp}
            maxLength = {20}
            leftIcon={
            <Entypo
             name='email'
            size={24}
            color='black'

            
         />
         
        
        }
        leftIconContainerStyle = {{margin:10}}
        
        />

        <Input
            placeholder={this.state.password}
            textContentType = 'password' 
            shake={true}
            onChangeText = {(e) => this.passwordStateEdit(e)}
            value = {this.state.passTemp}
            maxLength = {10}
            leftIcon={
            <FontAwesome
             name='user-secret'
            size={24}
            color='black'

            
         />
         
        
        }
        leftIconContainerStyle = {{margin:10}}
        
        />

        </View>
        
 
       <View style={{ flex:0.75, alignItems:'center', justifyContent:'center'}}>
       <TouchableOpacity style={{alignItems:'center',justifyContent:'space-around',width:150,height:50,backgroundColor:'#1ea1e8', borderRadius:10}} 
            onPress={this._editUserSettings}>
            <Text style={{fontSize:20,color:'white'}}>Save Changes</Text>
        </TouchableOpacity>
       </View>

       




         
        <View style={{position:'absolute', top:0, left:0 , bottom:0, margin:80,
         marginTop:100,marginLeft:200}}>
                <MaterialCommunityIcons name="account-edit" size={40} color={'black'}
           
         /> 
        </View>























        
        

         
          
     </KeyboardAvoidingView>
    );
  }


 

  componentDidMount() {
    this.getPermissionAsync();
    AsyncStorage.getItem("img").then((value) => {
      this.setState({"image": value});
  }).done();
  
    
    AsyncStorage.getItem("uname").then((value) => {
          this.setState({"username": value});
      }).done();
      AsyncStorage.getItem("emal").then((value) => {
        this.setState({"email": value});
    }).done();

    AsyncStorage.getItem("pass").then((value) => {
          this.setState({"password": value});
      }).done();
    
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
    
      AsyncStorage.setItem("img", this.state.image);
     
  
  }


  _editUserSettings = ()=>{
    
 
    this.setState({username: this.state.usernameTemp , usernameTemp: '' ,
        email: this.state.emailTemp,  emailTemp: '' ,
        password: this.state.passTemp,  passTemp: '' ,})
    AsyncStorage.setItem("uname", this.state.usernameTemp);
    AsyncStorage.setItem("emal", this.state.emailTemp);
    AsyncStorage.setItem("pass", this.state.passTemp);
 
  }

  
}