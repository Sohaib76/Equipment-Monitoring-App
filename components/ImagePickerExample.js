import * as React from 'react';
import {  Image, View, AsyncStorage, TouchableOpacity,Text } from 'react-native';
import {ImagePicker, Permissions,Constants} from 'expo';
//import {  Badge ,Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import { Card, ListItem, Button, Icon,Tooltip,Overlay ,Input} from 'react-native-elements'
import Layout from '../constants/Layout'
import SettingTopCard from './SettingsTopCard';





export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    usernameTemp: '',
    username: null,
    isVisible1: false,
    isVisible2: false,
    isVisible3: false,
    email: null,
    emailTemp: '',
    password: null,
    passTemp: ''
  };



  showPopup = ()=>{
    this.setState({isVisible1: true})
     
  }
  showPopup2 = ()=>{
    this.setState({isVisible2: true})
     
  }
  showPopup3 = ()=>{
    this.setState({isVisible3: true})
     
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

     
        <SettingTopCard/>





        <View style={{flexDirection:"column", justifyContent:'space-evenly'}}>

        {/** Main */}
       















          {/********************User Name *******************/}
        <Card containerStyle={{elevation:5,  
          shadowOffset:{width:0,height:2}, shadowRadius:5}}>
        <View  style={{width:Layout.window.width-5 , flexDirection:"column"}}>
          <Tooltip popover={<Text>Change Username</Text>}>
            <Text style={{fontWeight:'bold',fontSize:20, margin:10}}>UserName</Text>
          </Tooltip>
          </View>
          <View style={{
            
            flexDirection:'row' ,  justifyContent:'space-between',margin:16,marginBottom:-5}}>
           
            
             <Text style={{fontSize:18}}>{this.state.username}</Text>
           
            <TouchableOpacity activeOpacity={0.2} onPress={this.showPopup} style={{size:50}}>
               <MaterialIcons name="mode-edit" size={25}/>
            </TouchableOpacity>
  
          </View>
  
           
            </Card>








             {/********************Email *******************/}
            <Card containerStyle={{elevation:5,  
                    shadowOffset:{width:0,height:2}, shadowRadius:5}}>
                  <View  style={{width:Layout.window.width-5 , flexDirection:"column"}}>
                    <Tooltip popover={<Text>Change Email</Text>}>
                      <Text style={{fontWeight:'bold',fontSize:20, margin:10}}>Email</Text>
                    </Tooltip>
                    </View>
                    <View style={{
                      
                      flexDirection:'row' ,  justifyContent:'space-between',margin:16,marginBottom:-5}}>
                    
                      
                      <Text style={{fontSize:18}}>{this.state.email}</Text>
                    
                      <TouchableOpacity activeOpacity={0.2} onPress={this.showPopup2} style={{size:50}}>
                        <MaterialIcons name="mode-edit" size={25}/>
                      </TouchableOpacity>
            
                    </View>
            
           
            </Card>









            {/*************************Password **************/}
            

            
             <Card containerStyle={{elevation:5,  
                    shadowOffset:{width:0,height:2}, shadowRadius:5}}>
                  <View  style={{width:Layout.window.width-5 , flexDirection:"column"}}>
                    <Tooltip popover={<Text>Change Password</Text>}>
                      <Text style={{fontWeight:'bold',fontSize:20, margin:10}}>Password</Text>
                    </Tooltip>
                    </View>
                    <View style={{
                      
                      flexDirection:'row' ,  justifyContent:'space-between',margin:16,marginBottom:-5}}>
                    
                      
                      <Text style={{fontSize:18}}>{this.state.password}</Text>
                    
                      <TouchableOpacity activeOpacity={0.2} onPress={this.showPopup3} style={{size:50}}>
                        <MaterialIcons name="mode-edit" size={25}/>
                      </TouchableOpacity>
            
                    </View>
            
           
            </Card>












        </View>

      


          {/****************Username Overlay Popup********************/ }
          
            
            <Overlay 
              windowBackgroundColor="rgba(255, 255, 255, .5)"
              
              width= {Layout.window.width - 10}
              height={150}

              isVisible={this.state.isVisible1}
              onBackdropPress={() => this.setState({ isVisible1: false })}
            >
              <View>
                <Text style={{margin:10}}>Enter Your New UserName!</Text>
                <Input
                  placeholder='User Name'
                  shake={true}
                  onChangeText = {(e) => this.usernameStateEdit(e)}
                  value = {this.state.usernameTemp}
                  maxLength = {6}

                />
                <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                  <TouchableOpacity onPress={this._editUserName}>
                    <Text>Done</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({ isVisible1: false })}>
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
             


            </Overlay>













             {/****************Email Overlay Popup********************/ }
          
            
             <Overlay 
              windowBackgroundColor="rgba(255, 255, 255, .5)"
              
              width= {Layout.window.width - 10}
              height={150}

              isVisible={this.state.isVisible2}
              onBackdropPress={() => this.setState({ isVisible2: false })}
            >
              <View>
                <Text style={{margin:10}}>Enter Your New Email!</Text>
                <Input
                  textContentType = "emailAddress" 
                  placeholder='email'
                  shake={true}
                  onChangeText = {(e) => this.emailStateEdit(e)}
                  value = {this.state.emailTemp}
                  maxLength = {20}

                />
                <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                  <TouchableOpacity onPress={this._editEmail}>
                    <Text>Done</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({ isVisible2: false })}>
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
             


            </Overlay>






          
             {/****************Password Overlay Popup********************/ }
          
            
             <Overlay 
              windowBackgroundColor="rgba(255, 255, 255, .5)"
              
              width= {Layout.window.width - 10}
              height={150}

              isVisible={this.state.isVisible3}
              onBackdropPress={() => this.setState({ isVisible3: false })}
            >
              <View>
                <Text style={{margin:10}}>Enter Your New Password!</Text>
                <Input
                  textContentType = 'password' 
                  placeholder='password'
                  shake={true}
                  onChangeText = {(e) => this.passwordStateEdit(e)}
                  value = {this.state.passTemp}
                  maxLength = {20}

                />
                <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                  <TouchableOpacity onPress={this._editPassword}>
                    <Text>Done</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({ isVisible3: false })}>
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
             


            </Overlay>





















        





        <TouchableOpacity  style={{width: 100, height: 100 , borderRadius:50 
          ,position:'absolute',  top:0,left:0,bottom:0, margin:15, marginTop:40}} 
          onPress={this._pickImage}
          activeOpacity={0.8}
          >
          {/* <Button
            title = "Pick an image from gallery"
            onPress={this._pickImage}
          /> */}
     
    

        {image &&
          <Image source={{ uri: image }} style={{ width: 100, height: 100 ,borderRadius:50
          }} />

   }
       
        </TouchableOpacity> 
        <View style={{position:'absolute', top:0, left:0 , bottom:0, margin:80,
         marginTop:85}}>
        <MaterialCommunityIcons name="account-edit" size={40} color={'white'}
           
         /> 
        </View>

         
          
      </View>
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


  _editUserName = async()=>{
    this.setState({username: this.state.usernameTemp , usernameTemp: '', isVisible1: false })
    await AsyncStorage.setItem("uname", this.state.usernameTemp);
 
  }

  _editEmail = async() => {
    this.setState({email: this.state.emailTemp , emailTemp: '', isVisible2: false })
    await AsyncStorage.setItem("emal", this.state.emailTemp);
  }

  _editPassword = async() => {
    this.setState({password: this.state.passTemp , passTemp: '', isVisible3: false })
    await AsyncStorage.setItem("pass", this.state.passTemp);
  }
}