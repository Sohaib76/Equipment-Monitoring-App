import * as React from 'react';
import {  Badge ,Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'






export default class SettingTopCard extends React.Component {

    // https://www.whatswithtech.com/wp-content/uploads/2015/09/black-and-white-material-design-wallpaper-1.png
    render(){

    
        const settingsCard = require("../assets/images/Settings_card.jpg")
        return(
            <Card style={{margin:0,  borderRadius: 40}} >
            <CardImage 
              source={settingsCard} 
              
              // title="  Profile"
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
