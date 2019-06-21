import * as React from 'react';
import { Text, Image, View , TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class CardMain extends React.Component {
 
  

  render() {
    

    return (
 
                <TouchableOpacity style={{width:200}}>
                    <Card containerStyle={{shadowOffset:{width:0,height:2}, 
        justifyContent:"center",shadowRadius:2,shadowOpacity:1, 
        elevation: 4}}
                        
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
                    </Card>
                </TouchableOpacity>
    )
           
     }
}