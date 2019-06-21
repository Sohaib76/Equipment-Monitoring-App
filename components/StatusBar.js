import * as React from 'react';
import {  View , StatusBar} from 'react-native';
import {Constants} from 'expo'

//State less function
export default function DummyStatusBar(props) {

    return(
    <View
        style={{
            height: Constants.statusBarHeight,
            backgroundColor: props.backgroundColor,
           
        }}
    >
        <StatusBar translucent={false} {...props} /> 
    </View>
    )
  }