import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Layout from '../constants/Layout';


export default class CardDashboard extends React.Component {
 
  

  render() {
    const navigation = this.props.navigation

    return (
 
                <TouchableOpacity activeOpacity={0.9}
                style={{width:200, height:Layout.window.height/6 }}  onPress={()=> navigation.navigate(this.props.whereTonavigate)}>
                    <Card containerStyle={{shadowOffset:{width:0,height:2},
        justifyContent:"center",shadowRadius:2,shadowOpacity:1,
        elevation: 6}}
                        
                        title={this.props.title}
                        titleStyle={{marginTop:50}}
                    // featuredTitle = "CHAT"
                        
                        image={this.props.imgsrc}
                        imageStyle = {{ marginTop:0,marginLeft:30 ,alignContent:'center',maxWidth:80,maxHeight:80,justifyContent:'center'}}
                        >
                        {/* <Text style={{marginBottom: 10,}}>
                            You can chat instantly with your customer easy and fast.
                        </Text> */}
                        {/* <Button
                            //icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Open' /> */}
                            
                                <View style={{height:5,justifyContent:'flex-start'
                                ,alignItems:'flex-start',marginTop:20
                                
                            }}><Text style={{color:'grey'}}>Just Now</Text></View>
                           
                        
                    </Card>
                    
                </TouchableOpacity>
    )
           
     }
}