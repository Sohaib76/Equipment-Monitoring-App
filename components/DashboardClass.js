import * as React from 'react';
import { Text,  View , TouchableOpacity,AsyncStorage,StatusBar} from 'react-native';
import { Feather,Entypo,AntDesign } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon ,Avatar,Image } from 'react-native-elements'
import CardDashboard from './CardDashboard';
import {NavigationEvents} from 'react-navigation'



export default class Dashboard extends React.Component {
 
  constructor(props){
    super(props);
     
    this.state = {
        username : null,
        imageURL : null,
        email : null
    }
  }
  static navigationOptions = { header: null }
  render() {
    const navigation = this.props.navigation

    
    const m = require("../assets/images/1.02M.png")
    const salesByService = require("../assets/images/SalesByService.png")
    const cashAtBegining = require("../assets/images/CashAtBegining.png")
    const accountReceivable = require("../assets/images/accountReceivable.png")
    const accountPayable = require("../assets/images/accountPayable.png")
    const salesByProduct = require("../assets/images/salesByProduct.png")

    return (
      // <View style={{alignItems:"center"}}>
      //    <View style={{height:100 , width: Layout.window.width-5,backgroundColor:'blue'}}></View>
      //   <View style={{backgroundColor:'#d1c7a9',flex:1, flexDirection:'column',justifyContent:'space-between',margin:15, alignItems:'center'}}>
          
      //     {/* <View style={{flex:0.4,height:120 , width: Layout.window.width-5,backgroundColor:'yellow'}}></View> */}
      //     <View style={{
      //       justifyContent:'center',alignItems:'flex-start',
      //       flexDirection:"row",margin:15,height:165 , width: Layout.window.width-5,backgroundColor:'red'}}>
      //         <View style={{margin:4,height:165 , width: Layout.window.width/2,}}>

      //         <CardDashboard title="Income vs Target" imageSrc="https://www.featurepics.com/StockImage/20080210/sales-chart-stock-illustration-610291.jpg"/>
      //         </View>













      //         <View style={{margin:4,height:165 , width: Layout.window.width/2,backgroundColor:'yellow'}}></View>
      //     </View>
      //     <View style={{margin:5,height:165 , width: Layout.window.width-5,backgroundColor:'black'}}></View>
      //     <View style={{margin:5,height:165 , width: Layout.window.width-5,backgroundColor:'orange'}}></View>
          
      //   </View>
      //   </View>







            
 

   
       
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'
       ,backgroundColor:'black' }}>
         {/* #050400 */}
        <NavigationEvents
                  onWillFocus={() => {
                    AsyncStorage.getItem("img").then((value) => {
                        this.setState({imageURL: value});
                    })
                    AsyncStorage.getItem("uname").then((value) => {
                      this.setState({username: value});
                  })
                  AsyncStorage.getItem("emal").then((value) => {
                    this.setState({email: value});
                })
                  }}
                />

       
        <Card containerStyle={{shadowOffset:{width:0,height:2}, width:360, height:100,
        justifyContent:"space-around",shadowRadius:2,shadowOpacity:1, 
        elevation: 8, alignItems:'center',flex:2,marginTop:-3
    }} >
         
            
           
            <View  style={{
              
                marign:20,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
            <Avatar
                      rounded
                      size="large"
                      source={{
                          uri: this.state.imageURL
                      }}
                      containerStyle={{ marginLeft: 20, marginBottom:5}}

                      />
           
           <View style={{margin:15, justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>
                     <Text style={{fontWeight:'bold',fontSize:20}}>{this.state.username} Dashboard</Text>
                     <Text>{this.state.email}</Text>
            </View>
                <TouchableOpacity style={{margin:40, justifyContent:'center',alignItems:"flex-end"}}
                        onPress={()=> navigation.navigate('Settings')}>
                        <Feather name="settings" size={32} />
               </TouchableOpacity>
        </View>
        

        
        </Card>
        

        {/* *******************Cards*********************/}
       

        <View style={{flexDirection:"column", justifyContent:'flex-start',
            alignItems:'space-around', flex: 20 , backgroundColor:'red'
    }}>
            
            <View style={{flex:4, flexDirection:'row',justifyContent: 'center', alignItems:'flex-start'
        ,  alignSelf:'center' , backgroundColor:'yellow', marginTop:-20}}>
                <View style={{flex : 2, marginLeft:-8, justifyContent:'flex-start'}}>
                <CardDashboard title="Income vs Target" imgsrc={m} 
                navigation={navigation} whereTonavigate="DashboardFurtherScreens"
               
                />
               
                </View>
                <View style= {{flex:2 , marginRight:16}}>
                    <CardDashboard  title="Sales By Product" imgsrc={salesByProduct} navigation={navigation} whereTonavigate="DashboardFurtherScreens"/>

                </View>
            
            </View>

            <View style={{flex:4, flexDirection:'row',justifyContent: 'center', alignItems:'center',
        alignSelf: 'center',  backgroundColor:'green'}}>
                <View style={{flex : 2, marginLeft:-8,marginTop:-110 }}>
                <CardDashboard title="Cash At The Beginning.." imgsrc={cashAtBegining} navigation={navigation}
                 whereTonavigate="DashboardFurtherScreens"
                
                 />
                
                </View>
                <View style= {{flex:2 , marginRight:16, marginTop:-110}}>
                    <CardDashboard title="Sales By Service" imgsrc={salesByService} navigation={navigation} whereTonavigate="DashboardFurtherScreens"/>
                </View>
            
            </View>




            

            <View style={{flex:4, flexDirection:'row',justifyContent: 'center', alignItems:'center',
        alignSelf: 'center',marginTop:-20}}>
                <View style={{flex : 2, marginLeft:-8, marginTop:-80 }}>
                <CardDashboard title="Account Receivable" imgsrc={accountReceivable} navigation={navigation}
                 whereTonavigate="DashboardFurtherScreens"
                
                 />
                
                </View>
                <View style= {{flex:2 , marginRight:16 , marginTop:-80}}>
                    <CardDashboard  title="Account Payable" imgsrc={accountPayable} navigation={navigation} whereTonavigate="DashboardFurtherScreens"/>
                </View>
            
            </View>
           
        
        </View>


      </View>
    

  























    )
           
     }
}