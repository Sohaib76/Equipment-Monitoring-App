import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Layout from '../constants/Layout';


export default class CardDashboard extends React.Component {
 
  

  render() {
    const navigation = this.props.navigation

    return (
 
                <TouchableOpacity activeOpacity={0.6}
                style={{width:200,  height:Layout.window.height/4,justifyContent:'space-around',alignSelf:'center',alignItems:'stretch'}}  onPress={()=> navigation.navigate(this.props.whereTonavigate)}>
                    <Card containerStyle={{shadowOffset:{width:0,height:5},
        justifyContent:"space-between",alignItems:'center',shadowRadius:5,shadowOpacity:1,height:Layout.window.height/4,
        elevation: 8,borderRadius:10}}

                        
                        title={this.props.title}
                        // titleStyle={{marginTop:60}}
                    // featuredTitle = "CHAT"
                        
                        image={this.props.imgsrc}
                        //marginTop:0,marginLeft:30 ,
                        imageStyle = {{ alignContent:'center',maxWidth:80,maxHeight:80,justifyContent:'center'}}
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
                                ,alignItems:'flex-start'
                                
                            }}><Text style={{color:'grey'}}>Just Now</Text></View>
                           
                        
                    </Card>
                    
                </TouchableOpacity>
    )
           
     }
}