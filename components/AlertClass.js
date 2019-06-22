import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import TitleBar from './TitleBar';
import { Feather,MaterialIcons,FontAwesome} from '@expo/vector-icons';
import { Card, ListItem, Button, Icon ,Avatar,Image ,Input,Overlay} from 'react-native-elements'
import Layout from '../constants/Layout'

export default class Alert extends Component
{
    constructor()
    {
        super();
 
        if( Platform.OS === 'android' )
        {
 
          UIManager.setLayoutAnimationEnabledExperimental(true);
 
        }
 
        this.state = { 
 
           textLayoutHeight: 0,
           updatedHeight1: 0, 
           updatedHeight2: 0,
           expand1: false,
           expand2: false,
           buttonText : 'Click Here To Expand',
           isVisible1 : false,
           isVisible2 : false,
           reportTemp : '',
           myReport: ''
          
          }
 
    }

    reportStateEdit = (e)=>{
      this.setState({reportTemp: e })
    }
   

    acceptedRequest = ()=>{
      this.setState({isVisible1: true})
    }

    _editReport = () =>{
      this.setState({myReport:this.state.reportTemp, reportTemp:''})
      this.setState({isVisible1: false})
    }
    

    rejectedRequest = ()=>{
      this.setState({isVisible2: true})
    }


    expand_collapse_Function1 =()=>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expand1 == false )
        {
            this.setState({ 
              updatedHeight1: this.state.textLayoutHeight1, 
              expand1: true, 
              buttonText: 'Click Here To Collapse' 
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeight1: 0, 
              expand1: false, 
              buttonText: 'Click Here To Expand' 
            });
        }
    }


    expand_collapse_Function2 =()=>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expand2 == false )
        {
            this.setState({ 
              updatedHeight2: this.state.textLayoutHeight2, 
              expand2: true, 
              buttonText: 'Click Here To Collapse' 
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeight2: 0, 
              expand2: false, 
              buttonText: 'Click Here To Expand' 
            });
        }
    }
 
    getHeight(height)
    {
        this.setState({ textLayoutHeight: height });
    }
 
    static navigationOptions = { header: null }
    render()
    {

      const navigation = this.props.navigation
        return(
            <View style = { styles.MainContainer }>
              <TitleBar message="Alerts" navigation={navigation}/>
 
                <View style = { styles.ChildView }>














 
                    <TouchableOpacity activeOpacity = { 0.7 } 
                                      onPress = { this.expand_collapse_Function1 } 
                                      >
 
                        <Card containerStyle={{shadowOffset:{width:0,height:2}, width:360, height:150,
                                                justifyContent:"space-evenly",shadowRadius:2,shadowOpacity:1, 
                                                elevation: 8, alignItems:'center',flex:2,
                                                alignContent:'space-between'
                                            }} >
                                                
                                                    
                                                    
                                                    <View  style={{
                                                    
                                                        marign:10,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                                                   
                                                        
                                                          
                                                          <View >
                                                              <MaterialIcons name="report-problem" color="red" size={50}/>
                                                          </View>
                                                          
                                                            {/* containerStyle={{ marginLeft: 20, marginBottom:5}} */}

                                                            
                                                
                                                <View style={{margin:10, justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>
                                                            <Text style={{fontWeight:'bold',fontSize:20}}>Equipment : ID5342</Text>
                                                            <Text>Location : London</Text>
                                                            <Text>Description : You should try to change oil.</Text>
                                                    </View>
                                                        
                                                                <FontAwesome name="angle-double-down" size={32} />
                                                    
                                                </View>
                                                

                                                
                                                </Card>
                        {/* <View style={{flexDirection:"row"}}>
                          <View><Text>Image</Text></View>
                          <View><Text>Txt</Text></View>
                        </View> */}
 
                   
                    </TouchableOpacity>


                    <View style = {{ height: this.state.updatedHeight1, overflow: 'hidden' ,flexDirection:'row',justifyContent:'space-around'}}>
 
 
                        <TouchableOpacity style = { styles.ExpandViewInsideText } 
                              onPress={this.acceptedRequest}
                              onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height + 50 )}>
                            
                           
                            <Text style={{color:'white'}}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = { styles.ExpandViewInsideText } 
                              onPress={this.rejectedRequest}
                              onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height + 50 )}>
                              
                           
                            <Text style={{color:'white'}}>Reject</Text>
                        </TouchableOpacity>
                    
                    
                    </View>


















                    {/************************Warning Card***************** */}
                    <TouchableOpacity activeOpacity = { 0.7 } 
                                      onPress = { this.expand_collapse_Function2 } 
                                      >
 
                        <Card containerStyle={{shadowOffset:{width:0,height:2}, width:360, height:150,
                                                justifyContent:"space-evenly",shadowRadius:2,shadowOpacity:1, 
                                                elevation: 8, alignItems:'center',flex:2,
                                                alignContent:'space-between'
                                            }} >
                                                
                                                    
                                                    
                                                    <View  style={{
                                                    
                                                        marign:10,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                                                   
                                                        
                                                          
                                                          <View >
                                                              <MaterialIcons name="report-problem" color="yellow" size={50}/>
                                                          </View>
                                                          
                                                            {/* containerStyle={{ marginLeft: 20, marginBottom:5}} */}

                                                            
                                                
                                                <View style={{margin:10, justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>
                                                            <Text style={{fontWeight:'bold',fontSize:20}}>Equipment : ID6124</Text>
                                                            <Text>Location : Malaysia</Text>
                                                            <Text>Description : You vehicle needs new Paint.</Text>
                                                    </View>
                                                        
                                                                <FontAwesome name="angle-double-down" size={32} />
                                                    
                                                </View>
                                                

                                                
                                                </Card>
                        {/* <View style={{flexDirection:"row"}}>
                          <View><Text>Image</Text></View>
                          <View><Text>Txt</Text></View>
                        </View> */}
 
                   
                    </TouchableOpacity>






















                  {/**************oVERLAY Danger Accepted*************/}

                  <Overlay 
                      windowBackgroundColor="rgba(255, 255, 255, .5)"
                      
                      width= {Layout.window.width - 10}
                      height={350}

                      isVisible={this.state.isVisible1}
                      onBackdropPress={() => this.setState({ isVisible1: false })}
                    >
                      <View style={{justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                          <Text style={{marginTop:20, fontSize:20,fontWeight:'bold'}}>You Have Accepted!</Text>
                          <Text style={{margin:10 , fontSize:18}}>Report The Intervention</Text>
                        </View>
                      
                      <View >
                        <Input
                            placeholder='Enter Your Report'
                            shake={true}
                            onChangeText = {(e) => this.reportStateEdit(e)}
                            value = {this.state.reportTemp}
                            maxLength = {100}
                            multiline={true}

                            
                            inputContainerStyle = {{height:200}}

                          />
                               </View>
                      
                      <View style={{flexDirection:'row', justifyContent:'flex-end',margin:20}}>
                          <TouchableOpacity><MaterialIcons name="attach-file" size={30} color="black"/></TouchableOpacity>
                          
                          <TouchableOpacity><MaterialIcons name="photo-camera" size={30} color="black"/></TouchableOpacity>
                          
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                          <TouchableOpacity onPress={this._editReport}>
                            <Text>Done</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => this.setState({ isVisible1: false })}>
                            <Text>Cancel</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      
                    


                    </Overlay>



















                              {/**************oVERLAY Danger Rejected*************/}

                  <Overlay 
                      windowBackgroundColor="rgba(255, 255, 255, .5)"
                      
                      width= {Layout.window.width - 10}
                      height={350}

                      isVisible={this.state.isVisible2}
                      onBackdropPress={() => this.setState({ isVisible2: false })}
                    >
                      <View style={{justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                          <Text style={{marginTop:20, fontSize:15,fontWeight:'bold'}}>You Have Rejected The Intervention!</Text>
                          <Text style={{margin:10 , fontSize:18}}>Cause of Rejection?</Text>
                        </View>
                      
                      <View >
                        <Input
                            placeholder='Enter Your Report'
                            shake={true}
                            onChangeText = {(e) => this.reportStateEdit(e)}
                            value = {this.state.reportTemp}
                            maxLength = {100}
                            multiline={true}

                            
                            inputContainerStyle = {{height:200}}

                          />
           
                          
                      </View>
                      
                      <View style={{flexDirection:'row', justifyContent:'flex-end',margin:20}}>
                          <TouchableOpacity><MaterialIcons name="attach-file" size={30} color="black"/></TouchableOpacity>
                          
                          <TouchableOpacity><MaterialIcons name="photo-camera" size={30} color="black"/></TouchableOpacity>
                          
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',margin:10}}>
                          <TouchableOpacity onPress={this._editReport}>
                            <Text>Done</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => this.setState({ isVisible2: false })}>
                            <Text>Cancel</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      
                    


                    </Overlay>















































                    


 
                    
                    <View style = {{ height: this.state.updatedHeight2, overflow: 'hidden' ,flexDirection:'row',justifyContent:'space-around'}}>
 
 
                        <TouchableOpacity style = { styles.ExpandViewInsideText } 
                              onPress={this.acceptedRequest}
                              onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height + 50 )}>
                            
                           
                            <Text style={{color:'white'}}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = { styles.ExpandViewInsideText } 
                              onPress={this.rejectedRequest}
                              onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height + 50 )}>
                              
                           
                            <Text style={{color:'white'}}>Reject</Text>
                        </TouchableOpacity>
                    
                    
                    </View>
                
                </View>
            
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
       
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
 
    ChildView:
    {
        // borderWidth: 1,
        // borderColor: '#00BCD4',
        margin: 5,
        flex: 0.18, 
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
 
    TouchableOpacityStyle:
    {
        padding: 10,
        backgroundColor: '#00BCD4'
    },
 
    TouchableOpacityTitleText:
    {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },
 
    ExpandViewInsideText:
    {
        fontSize: 16,
        color: 'blue',
        padding: 12,
        width: 150,
        height: 50,
        backgroundColor:'#3cb7e8',
        margin: 20,
        borderRadius : 10,
        justifyContent:'center',
        alignItems:'center'
        

    }
});