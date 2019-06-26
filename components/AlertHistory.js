import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage,Text, TouchableOpacity, LayoutAnimation, UIManager, Platform ,KeyboardAvoidingView} from 'react-native';
import TitleBar from './TitleBar';
import { Feather,MaterialIcons,FontAwesome} from '@expo/vector-icons';
import { Card, ListItem, Button, Icon ,Avatar,Image ,Input,Overlay} from 'react-native-elements'
import Layout from '../constants/Layout'
import { ScrollView } from 'react-native-gesture-handler';


export default class AlertHistory extends React.Component {
    

        constructor()
    
        {
    
            super();
    
  
    this.state = { 

 

        textLayoutHeight: 0,

        updatedHeight1: 0, 

        updatedHeight2: 0,

        updatedHeight3 : 0,

        updatedHeight4: 0,

        expand1: false,

        expand2: false,

        expand3 : false,

        ecpand4 : false,

        reportTemp : '',

        myReport: '',

       id_1 : 'ID5342',

       id_2 : 'ID6124',


       

       }



 }



 reportStateEdit = (e)=>{

   this.setState({reportTemp: e })

 }


componentWillMount(){
    // AsyncStorage.removeItem("cardYellow")
    // AsyncStorage.removeItem("cardYellowReject")
    // AsyncStorage.removeItem("cardRed")
    // AsyncStorage.removeItem("cardRedReject")
    AsyncStorage.setItem("cardYellow" , this.props.navigation.state.params.cardYAccept)
  
    AsyncStorage.setItem("cardYellowReject" , this.props.navigation.state.params.cardYReject)
   

    AsyncStorage.setItem("cardRed" , this.props.navigation.state.params.cardRAccept)
   
    AsyncStorage.setItem("cardRedReject" , this.props.navigation.state.params.cardRReject)
    
}

componentDidMount(){
    AsyncStorage.getItem("cardYellow").then((value) => {
        this.setState({"cardYellow": value});
    }).done();
    AsyncStorage.getItem("cardYellowReject").then((value) => {
        this.setState({"cardYellowReject": value});
    }).done();

    AsyncStorage.getItem("cardRed").then((value) => {
        this.setState({"cardRed": value});
    }).done();
    AsyncStorage.getItem("cardRedReject").then((value) => {
        this.setState({"cardRedReject": value});
    }).done();
    
}



 _editReport = () =>{

   this.setState({myReport:this.state.reportTemp, reportTemp:'', expand1:false,updatedHeight1:0})

   alert("Your Report " + this.state.id_1 + " has been successfully submitted to our servers")

 }

 _editReport2 = () =>{

   this.setState({myReport:this.state.reportTemp, reportTemp:'',expand2:false,updatedHeight2:0})

   alert("Your Report " + this.state.id_2 + " has been successfully submitted to our servers")

 }

 _editReport3 = () =>{

    this.setState({myReport:this.state.reportTemp, reportTemp:'',expand3:false,updatedHeight3:0})
 
    alert("Your Report " + this.state.id_1 + " has been successfully submitted to our servers")
 
  }
 
  
  _editReport4 = () =>{

    this.setState({myReport:this.state.reportTemp, reportTemp:'',expand4:false,updatedHeight4:0})
 
    alert("Your Report " + this.state.id_2 + " has been successfully submitted to our servers")
 
  }
  
 





 expand_collapse_Function1 =()=>

 {

     LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );



     if( this.state.expand1 == false )

     {

         this.setState({ 

           updatedHeight1: this.state.textLayoutHeight1, 

           expand1: true, 

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


 expand_collapse_Function3 =()=>

 {

     LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );



     if( this.state.expand3 == false )

     {

         this.setState({ 

           updatedHeight3: this.state.textLayoutHeight1, 

           expand3: true, 

         }); 

     }

     else

     {

         this.setState({ 

           updatedHeight3: 0, 

           expand3: false, 

       

         });

     }

 }




 expand_collapse_Function4 =()=>

 {

     LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );



     if( this.state.expand4 == false )

     {

         this.setState({ 

           updatedHeight4: this.state.textLayoutHeight1, 

           expand4: true, 

         }); 

     }

     else

     {

         this.setState({ 

           updatedHeight4: 0, 

           expand4: false, 

         });

     }

 }



 getHeight(height)

 {

     this.setState({ textLayoutHeight: height });

 }







































 

  render() {
    const {navigation} = this.props.navigation

    return (
        // behavior="padding" enabled
        <KeyboardAvoidingView behavior="padding" enabled style={{  flex: 1,

       

            paddingTop: (Platform.OS === 'ios') ? 20 : 0}}>



          
                <View    style={{ margin: 5, 

                    flex: 0.18, 
            
                    alignItems: 'center',
            
                    justifyContent: 'flex-start'}}>


        {  this.state.cardRed === "firstCard"  &&
                     <TouchableOpacity activeOpacity = { 0.7 } 

                                    onPress = { this.expand_collapse_Function1 } 

                                    >



                                    <Card containerStyle={{shadowOffset:{width:0,height:2}, width:Layout.window.width -2, height:Layout.window.height/6.5,

                                            justifyContent:"center",shadowRadius:2,shadowOpacity:1, 

                                            elevation: 8, alignItems:'center',flex:2,

                                            alignContent:'space-between' 

                                        }} >

                                            

                                                

                                                

                                                <View  style={{ 
                                                height:Layout.window.height/6.5, width:Layout.window.width - 2,

                                                

                                                    flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>

                                                

                                                    

                                                        

                                                        <View>

                                                            <MaterialIcons name="report-problem" color="red" size={50}/>

                                                        </View>

                                                        

                                                        {/* containerStyle={{ marginLeft: 20, marginBottom:5}} */}



                                                        

                                            

                                            <View style={{ justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>

                                                        <Text style={{fontWeight:'bold',fontSize:20}}>Accepted : 06/26</Text>
                                                        <Text>Equipment : ID5342 </Text>
                                                        <Text>Location : London</Text>

                                                        

                                                </View>

                                                    

                                                            <FontAwesome name="angle-double-down" size={32} />

                                                

                                            </View>

                                            



                                            

                                            </Card>

                                    {/* <View style={{flexDirection:"row"}}>

                                    <View><Text>Image</Text></View>

                                    <View><Text>Txt</Text></View>

                                    </View> */}





                                    </TouchableOpacity>



                                }


                                    <View style = {{ height: this.state.updatedHeight1, overflow: 'hidden' ,flexDirection:'row',justifyContent:'space-around'}}>
                                    {/* behavior="padding" enabled */}
                                   
                                    <View style={{height:350}}>
                                    <View style={{justifyContent:'center',}}>

                                        <View style={{alignItems:'center'}}>

                                        

                                        <Text style={{marginTop:10 , fontSize:18}}>Report The Intervention</Text>

                                        </View>



                                       <View>

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

                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                            <TouchableOpacity style={{ width:100,height:40}} onPress={this._editReport}>

                                <Text>Done</Text>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.expand_collapse_Function1}>

                                <Text>Cancel</Text>

                            </TouchableOpacity>

                                      </View>

                                 </View>


                                 </View>
 

                                    </View>































    































                                    {/**************************Yellow Accepted */}

                                    {   this.state.cardYellow === "secondCard"  &&
                                        <TouchableOpacity activeOpacity = { 0.7 } 

                                        onPress = { this.expand_collapse_Function2 } 

                                        >



                        <Card containerStyle={{shadowOffset:{width:0,height:2}, width:Layout.window.width-2, height:Layout.window.height/6.5,

                                                justifyContent:"space-evenly",shadowRadius:2,shadowOpacity:1, 

                                                elevation: 8, alignItems:'center',flex:2,

                                                alignContent:'space-between'

                                            }} >

                                                

                                                    

                                                    

                                                    <View  style={{

                                                    
                                                        width:Layout.window.width-2,height:Layout.window.height/6.5,
                                                        flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>

                                                    

                                                        

                                                            

                                                            <View >

                                                                <MaterialIcons name="report-problem" color="yellow" size={50}/>

                                                            </View>

                                                            

                                                            {/* containerStyle={{ marginLeft: 20, marginBottom:5}} */}



                                                            

                                                

                                                <View style={{ justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>

                                                            <Text style={{fontWeight:'bold',fontSize:20}}>Accepted : 06/26</Text>

                                                            <Text>Equipment : ID6124</Text>
                                                            <Text>Location : Malaysia</Text>

                                                            

                                                    </View>

                                                        

                                                                <FontAwesome name="angle-double-down" size={32} />

                                                    

                                                </View>

                                                



                                                

                                                </Card>

                        {/* <View style={{flexDirection:"row"}}>

                            <View><Text>Image</Text></View>

                            <View><Text>Txt</Text></View>

                        </View> */}



                    

                    </TouchableOpacity>



                    }

                                                             

                <View style = {{ height: this.state.updatedHeight2, overflow: 'hidden' ,flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{height:350}}>

                                <View style={{justifyContent:'center'}}>

                                <View style={{alignItems:'center'}}>

                

                                <Text style={{marginTop:10 , fontSize:18}}>Report The Intervention</Text>

                                </View>



                                

                                <Input

                                    placeholder='Enter Your Report'

                                    shake={true}

                                    onChangeText = {(e) => this.reportStateEdit(e)}

                                    value = {this.state.reportTemp}

                                    maxLength = {100}

                                    multiline={true}



                                    

                                    inputContainerStyle = {{height:200}}



                                />

                                    



                                <View style={{flexDirection:'row', justifyContent:'flex-end',margin:20}}>

                                <TouchableOpacity><MaterialIcons name="attach-file" size={30} color="black"/></TouchableOpacity>

                                

                                <TouchableOpacity><MaterialIcons name="photo-camera" size={30} color="black"/></TouchableOpacity>

                                

                                </View>

                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                                <TouchableOpacity style={{width:100,height:40}} onPress={this._editReport2}>

                                    <Text>Done</Text>

                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.expand_collapse_Function2}>

                                    <Text>Cancel</Text>

                                </TouchableOpacity>

                                </View>

                                </View>

                    </View>
                    </View>

               





























                {/********************Red Card Rejected *************/}


                                                
                {  this.state.cardRedReject === "firstCard"  &&
                                                <TouchableOpacity activeOpacity = { 0.7 } 

                                                                onPress = { this.expand_collapse_Function3 } 

                                                                >



                                                                <Card containerStyle={{shadowOffset:{width:0,height:2}, width:Layout.window.width -2, height:Layout.window.height/6.5,

                                                                        justifyContent:"center",shadowRadius:2,shadowOpacity:1, 

                                                                        elevation: 8, alignItems:'center',flex:2,

                                                                        alignContent:'space-between' 

                                                                    }} >

                                                                        

                                                                            

                                                                            

                                                                            <View  style={{ 
                                                                            height:Layout.window.height/6.5, width:Layout.window.width - 2,

                                                                            

                                                                                flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>

                                                                            

                                                                                

                                                                                    

                                                                                    <View>

                                                                                        <MaterialIcons name="report-problem" color="red" size={50}/>

                                                                                    </View>

                                                                                    

                                                                                    {/* containerStyle={{ marginLeft: 20, marginBottom:5}} */}



                                                                                    

                                                                        

                                                                        <View style={{ justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>

                                                                                    <Text style={{fontWeight:'bold',fontSize:20}}>Rejected : 06/26</Text>
                                                                                    <Text>Equipment : ID5342  {this.props.navigation.state.params.cardRAccept}</Text>
                                                                                    <Text>Location : London</Text>

                                                                                    

                                                                            </View>

                                                                                

                                                                                        <FontAwesome name="angle-double-down" size={32} />

                                                                            

                                                                        </View>

                                                                        



                                                                        

                                                                        </Card>

                                                                {/* <View style={{flexDirection:"row"}}>

                                                                <View><Text>Image</Text></View>

                                                                <View><Text>Txt</Text></View>

                                                                </View> */}





                                                                </TouchableOpacity>



                                                            }

                                  <View    style = {{ height: this.state.updatedHeight3, overflow: 'hidden' ,flexDirection:'row',justifyContent:'space-around'}}>
                                                                <View style={{height:350}}>
                            
                                                                <View style={{justifyContent:'center'}}>

                                                                    <View style={{alignItems:'center', justifyContent:'space-around'}}>

                                                                    

                                                                    <Text style={{marginTop:10 , fontSize:18}}>Cause of Rejection</Text>

                                                                    </View>



                                                                

                                                                    <Input

                                                                        placeholder='Enter Your Report'

                                                                        shake={true}

                                                                        onChangeText = {(e) => this.reportStateEdit(e)}

                                                                        value = {this.state.reportTemp}

                                                                        maxLength = {100}

                                                                        multiline={true}



                                                                        

                                                                        inputContainerStyle = {{height:200}}



                                                                    />

                                                                    



                                                        <View style={{flexDirection:'row', justifyContent:'flex-end',margin:20}}>

                                                        <TouchableOpacity><MaterialIcons name="attach-file" size={30} color="black"/></TouchableOpacity>

                                                        

                                                        <TouchableOpacity><MaterialIcons name="photo-camera" size={30} color="black"/></TouchableOpacity>

                                                        

                                                        </View>

                                                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                                                        <TouchableOpacity style={{ width:100,height:40}} onPress={this._editReport3}>

                                                            <Text>Done</Text>

                                                        </TouchableOpacity>

                                                        <TouchableOpacity onPress={this.expand_collapse_Function3}>

                                                            <Text>Cancel</Text>

                                                        </TouchableOpacity>

                                                                </View>

                                                            </View>


                                                        </View>
                            

                                                                </View>




































                                        


                                        
                {/********************Red Card Rejected *************/}


                                                
                {  this.state.cardYellowReject === "secondCard"  &&
                                                <TouchableOpacity activeOpacity = { 0.7 } 

                                                                onPress = { this.expand_collapse_Function4 } 

                                                                >



                                                                <Card containerStyle={{shadowOffset:{width:0,height:2}, width:Layout.window.width -2, height:Layout.window.height/6.5,

                                                                        justifyContent:"center",shadowRadius:2,shadowOpacity:1, 

                                                                        elevation: 8, alignItems:'center',flex:2,

                                                                        alignContent:'space-between' 

                                                                    }} >

                                                                        

                                                                            

                                                                            

                                                                            <View  style={{ 
                                                                            height:Layout.window.height/6.5, width:Layout.window.width - 2,

                                                                            

                                                                                flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>

                                                                            

                                                                                

                                                                                    

                                                                                    <View>

                                                                                        <MaterialIcons name="report-problem" color="yellow" size={50}/>

                                                                                    </View>

                                                                                    

                                                                                    {/* containerStyle={{ marginLeft: 20, marginBottom:5}} */}



                                                                                    

                                                                        

                                                                        <View style={{ justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>

                                                                                    <Text style={{fontWeight:'bold',fontSize:20}}>Rejected : 06/26</Text>
                                                                                    <Text>Equipment : ID6124  </Text>
                                                                                    <Text>Location : Malaysia</Text>

                                                                                    

                                                                            </View>

                                                                                

                                                                                        <FontAwesome name="angle-double-down" size={32} />

                                                                            

                                                                        </View>

                                                                        



                                                                        

                                                                        </Card>

                                                                {/* <View style={{flexDirection:"row"}}>

                                                                <View><Text>Image</Text></View>

                                                                <View><Text>Txt</Text></View>

                                                                </View> */}





                                                                </TouchableOpacity>



                                                            }

                                  <View    style = {{ height: this.state.updatedHeight4, overflow: 'hidden' ,flexDirection:'row',justifyContent:'space-around'}}>
                                                                <View style={{height:350}}>
                            
                                                                <View style={{justifyContent:'center'}}>

                                                                    <View style={{alignItems:'center', justifyContent:'space-around'}}>

                                                                    

                                                                    <Text style={{marginTop:10 , fontSize:18}}>Cause of Rejection</Text>

                                                                    </View>



                                                                

                                                                    <Input

                                                                        placeholder='Enter Your Report'

                                                                        shake={true}

                                                                        onChangeText = {(e) => this.reportStateEdit(e)}

                                                                        value = {this.state.reportTemp}

                                                                        maxLength = {100}

                                                                        multiline={true}



                                                                        

                                                                        inputContainerStyle = {{height:200}}



                                                                    />

                                                                    



                                                        <View style={{flexDirection:'row', justifyContent:'flex-end',margin:20}}>

                                                        <TouchableOpacity><MaterialIcons name="attach-file" size={30} color="black"/></TouchableOpacity>

                                                        

                                                        <TouchableOpacity><MaterialIcons name="photo-camera" size={30} color="black"/></TouchableOpacity>

                                                        

                                                        </View>

                                                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                                                        <TouchableOpacity style={{ width:100,height:40}} onPress={this._editReport4}>

                                                            <Text>Done</Text>

                                                        </TouchableOpacity>

                                                        <TouchableOpacity onPress={this.expand_collapse_Function4}>

                                                            <Text>Cancel</Text>

                                                        </TouchableOpacity>

                                                                </View>

                                                            </View>


                                                        </View>
                            

                                                                </View>




































                </View>
                
                               
              
                </KeyboardAvoidingView>
    )
           
     }
}










const styles = StyleSheet.create(

    {
    
     
    

     
    
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




