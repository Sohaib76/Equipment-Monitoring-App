import * as React from 'react';
import {  Badge ,Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'






export default class SettingTopCard extends React.Component {

    // https://www.whatswithtech.com/wp-content/uploads/2015/09/black-and-white-material-design-wallpaper-1.png
    render(){
        return(
            <Card style={{margin:0,  borderRadius: 40}} >
            <CardImage 
              source={{uri: 'https://i.pinimg.com/originals/99/a7/5d/99a75d485745d13b7c5c6d394260ac7d.jpg'}} 
              
              title="  Profile"
              style= {{fontFamily:'sans-serif-condensed', fontWeight:'bold', fontSize:20}}
            
              
            />
            <CardTitle 
             // title="This is a title" 
             // subtitle="This is subtitle"
            />
            <CardContent  />
            
        
          </Card> 
  
        )
    }
   
}
