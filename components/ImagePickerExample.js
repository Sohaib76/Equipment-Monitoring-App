import * as React from 'react';
import { Button, Image, View, AsyncStorage, TouchableOpacity,Text } from 'react-native';
import {ImagePicker, Permissions, Constants} from 'expo';


export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };


 

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity >
          <Button
            title = "Pick an image from gallery"
            onPress={this._pickImage}
          />
        </TouchableOpacity>
       
        {image &&
          <Image source={{ uri: image }} style={{ width: 100, height: 100 , borderRadius:50}} />}
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