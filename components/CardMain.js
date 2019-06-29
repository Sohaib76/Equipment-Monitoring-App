import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class CardMain extends React.Component {
 
  

  render() {
    const navigation = this.props.navigation

    return (
 
                <TouchableOpacity activeOpacity={0.5}
                style={{width:200, alignSelf:'center',justifyContent:'center'}}  onPress={()=> navigation.navigate(this.props.whereTonavigate, {cardYPtanhi:"firstCard"})}>
                    <Card containerStyle={{shadowOffset:{width:0,height:3},
        justifyContent:"center",shadowRadius:5,shadowOpacity:1,borderWidth:1,borderColor:'#adadad',
        shadowColor:'#000000', shadowOpacity:1, backgroundColor:'white',
        elevation: 6, borderRadius:20}}
                        
                        title={this.props.title}
                    // featuredTitle = "CHAT"
                        
                        image={this.props.imgsrc}
                        imageStyle = {{ margin:5 ,alignContent:'center',maxWidth:150,maxHeight:150,justifyContent:'center'}}
                        >
                        {/* <Text style={{marginBottom: 10,}}>
                            You can chat instantly with your customer easy and fast.
                        </Text> */}
                        {/* <Button
                            //icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Open' /> */}
                            
                                <View style={{backgroundColor:this.props.bgColor,height:10,justifyContent:'center'
                                ,alignItems:'center'
                            }}></View>
                           
                        
                    </Card>
                    
                </TouchableOpacity>
    )
           
     }
}