import React, { Component } from 'react';

import { StyleSheet, View, AsyncStorage,Text, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';

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

        
          card : 'true',

          card2: 'true',

          id_1 : 'ID5342',

          id_2 : 'ID6124',

          isVisible2 : false,
           
          isVisible4 : false,
          reportTemp : '',

          myReport: '',
     

          }

 

    }



    reportStateEdit = (e)=>{

      this.setState({reportTemp: e })

    }

   



    acceptedRequest = ()=>{
      alert("You've Accepted the request.")
      this.props.navigation.navigate("AlertHistory" ,  {cardRAccept:"firstCard"})
      this.setState({card: 'false'})
      AsyncStorage.setItem("card", 'false')
      
   

    }

    acceptedRequest2 = ()=>{
      alert("You've Accepted the request.")
      this.props.navigation.navigate("AlertHistory" ,  {cardYAccept:"secondCard"})
      this.setState({card2: 'false'})
      AsyncStorage.setItem("card2", 'false')

    }

    // intervention = ()=>{

    //   this.props.navigation.navigate("AlertHistory" ,  {cardYAccept:"card"})
      
    
    // }





    _removeItemValue = async() => {
      alert("this.state.card2")
      try {
        await AsyncStorage.removeItem("card2");
        AsyncStorage.setItem("card2", true)
        alert(this.state.card2)
        return true;
      }
      catch(exception) {
        alert("this.state.card2")
        return false;
      }
     
     
    }
     componentWillMount(){

    
     
        
      
      //   if(this.state.card === undefined || this.state.card === null){
      //     this.setState({card: true})
      // }
      // alert(this.state.card)

      //  AsyncStorage.removeItem("card")
      //  AsyncStorage.removeItem("card2")

      // alert(AsyncStorage.getItem('card'))

      // AsyncStorage.setItem("card", 'true')
      // AsyncStorage.setItem("card2", 'true')
     
    //   // alert(this.state.card)
  
   
     }

    componentDidMount() {

      AsyncStorage.getItem('card', (err, result) => {
        if (!err && result != null){
            // do something 
            this.setState({card: result});
        }
        else {
            // do something else
        }
       
      });


      AsyncStorage.getItem('card2', (err, result) => {
        if (!err && result != null){
            // do something 
            this.setState({card2: result});
        }
        else {
            // do something else
        }
       
      });
      // if( AsyncStorage.getItem("card") === "jhhh" ||  AsyncStorage.getItem("card") === "truasfsae"){
      //   AsyncStorage.getItem("card").then((value) => {
      //     this.setState({card: value});
      // }).done()
      // }
  
      // if(AsyncStorage.getItem("card2") !== undefined || AsyncStorage.getItem("card2") !== null){
      //   AsyncStorage.getItem("card2").then((value) => {
      //     this.setState({card2: value});
      // }).done()
    
      // }
  

   

     
    }

    



    rejectedRequest = ()=>{

      // this.props.navigation.navigate("AlertHistory" ,  {cardRReject:"firstCard"})
      // this.setState({card: 'false'})
      // AsyncStorage.setItem("card", 'false')
      this.setState({isVisible2: true})
      


    }

    rejectedRequest2 = ()=>{
      // this.props.navigation.navigate("AlertHistory" ,  {cardYReject:"secondCard"})
      // this.setState({card2: 'false'})
      // AsyncStorage.setItem("card2", 'false')
      this.setState({isVisible4: true})

    }

    _editReport = () =>{

      this.setState({myReport:this.state.reportTemp, reportTemp:'', expand1:false,updatedHeight1:0,card: "false",isVisible2:false})
   
      alert("Your Report " + this.state.id_1 + " has been successfully submitted to our servers")

     
      AsyncStorage.setItem("card", 'false')
     
     
      this.props.navigation.navigate("AlertHistory" ,  {cardRReject:"firstCard",causeOfRejectionR: this.state.reportTemp})
      
    }


    _editReport2 = () =>{

      this.setState({myReport:this.state.reportTemp, reportTemp:'', expand2:false,updatedHeight2:0,card2: "false",isVisible4:false})
   
      alert("Your Report " + this.state.id_2 + " has been successfully submitted to our servers")

     
      AsyncStorage.setItem("card2", 'false')
     
     
      this.props.navigation.navigate("AlertHistory" ,  {cardYReject:"secondCard",causeOfRejectionY: this.state.reportTemp})
      
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

      //var img = this.state.showImage ? <MyImage /> :''

      const navigation = this.props.navigation
      let {card} = this.state
      let {card2} = this.state

        return(

            <View style = { styles.MainContainer }>

              <TitleBar message="Alerts" navigation={navigation}/>

                  
           

            

                <View style = { styles.ChildView }>
























                 

                {card === 'true'  && 

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

                                                            <Text style={{fontWeight:'bold',fontSize:20}}>Equipment : ID5342</Text>

                                                            <Text>Location : Benguerir</Text>

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

                      }
{card === 'true'  && 

                    <View style = {{ height: this.state.updatedHeight1, overflow: 'hidden' ,flexDirection:'row',justifyContent:'space-around'}}>

 

 

                        <TouchableOpacity style = { styles.ExpandViewInsideText } 
                              onPress={this.acceptedRequest}
                              // onPress={this.acceptedRequest}

                              onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height + 50 )}>

                            

                           

                            <Text style={{color:'white'}}>Accept</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style = { styles.ExpandViewInsideText } 

                              onPress={this.rejectedRequest}

                              onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height + 50 )}>



                           

                            <Text style={{color:'white'}}>Reject</Text>

                        </TouchableOpacity>

                    

                    

                    </View>

         }























                                                {/**************oVERLAY Danger Rejected*************/}



          <Overlay 

              windowBackgroundColor="rgba(255, 255, 255, .5)"



              width= {Layout.window.width - 10}

              height={400}



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

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                  <TouchableOpacity onPress={this._editReport}>

                    <Text>Done</Text>

                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState({ isVisible2: false })}>

                    <Text>Cancel</Text>

                  </TouchableOpacity>

                </View>

              </View>









              </Overlay>



















































          {/************************Warning Card***************** */}

{card2 === 'true' &&

                    

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




               } 












 

                    {card2 === 'true' &&       

                    <View style = {{ height: this.state.updatedHeight2, overflow: 'hidden' ,flexDirection:'row',justifyContent:'space-around'}}>

 

 

                        <TouchableOpacity style = { styles.ExpandViewInsideText } 
                              // () => navigation.navigate("AlertHistory" ,  {cardYAccept:"secondCard"})
                              onPress={this.acceptedRequest2}

                              onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height + 50 )}>

                            

                           

                            <Text style={{color:'white'}}>Accept</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style = { styles.ExpandViewInsideText } 

                              onPress={this.rejectedRequest2}

                              onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height + 50 )}>

                              

                           

                            <Text style={{color:'white'}}>Reject</Text>

                        </TouchableOpacity>

                    

                    

                    </View>
                    }






















                                        {/**************oVERLAY Yellow Rejected*************/}



                            <Overlay 

                  windowBackgroundColor="rgba(255, 255, 255, .5)"



                  width= {Layout.window.width - 10}

                  height={400}



                  isVisible={this.state.isVisible4}

                  onBackdropPress={() => this.setState({ isVisible4: false })}

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

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                      <TouchableOpacity onPress={this._editReport2}>

                        <Text>Done</Text>

                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.setState({ isVisible4: false })}>

                        <Text>Cancel</Text>

                      </TouchableOpacity>

                    </View>

                  </View>









                  </Overlay>


































                    
                {/* <TouchableOpacity onPress={this.intervention}
              style={{borderRadius:10,margin:20 ,justifyContent:'center',alignItems:'center',width:Layout.window.width-2,backgroundColor:"#11b7d1",height:Layout.window.height/6.5}}>
                <Text style={{fontSize:15, color:'white'}}>My Interventions</Text></TouchableOpacity> */}











                {/* <TouchableOpacity oPress={this._removeItemValue} style={{justifyContent:'flex-start',alignItems:'flex-end'}}><Text>Reset</Text></TouchableOpacity> */}

                </View>
                    
                    {/* <TouchableOpacity oPress={this.reset} style={{justifyContent:'flex-start',alignItems:'flex-end'}}><Text>.</Text></TouchableOpacity> */}

            </View>

        );

    }

}
reset = () =>{
  AsyncStorage.removeItem("card");
  AsyncStorage.removeItem("card2");
  this.setState({card:true,card2:true})
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