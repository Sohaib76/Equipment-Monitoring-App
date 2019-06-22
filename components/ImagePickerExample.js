import * as React from 'react';
import { Button, Image, View, AsyncStorage, TouchableOpacity,Text } from 'react-native';
import {ImagePicker, Permissions, Constants} from 'expo';
import { Badge ,Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {MaterialCommunityIcons} from '@expo/vector-icons'


export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };


 

  render() {
    let { image } = this.state;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Card>
          <CardImage 
            source={{uri: 'https://i.pinimg.com/originals/99/a7/5d/99a75d485745d13b7c5c6d394260ac7d.jpg'}} 
            title="Profile Picture"
          
            
          />
          <CardTitle 
           // title="This is a title" 
           // subtitle="This is subtitle"
          />
          <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
          <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
              onPress={() => {}}
              title="Push"
              color="blue"
            />
            <CardButton
              onPress={() => {}}
              title="Later"
              color="blue"
            />
          </CardAction>
        </Card>








        <TouchableOpacity >
          <Button
            title = "Pick an image from gallery"
            onPress={this._pickImage}
          />
        </TouchableOpacity>
       
        {image &&
          <Image source={{ uri: image }} style={{ width: 100, height: 100 , borderRadius:50
          ,position:'absolute',  top:0,left:0,bottom:0, margin:15, marginTop:40
          }} />

   }
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
     // this.setState({"myKey": value});
  
  }
}