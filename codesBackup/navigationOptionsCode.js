// componentDidMount() {
//     console.log(this.state.imageURL + 'componentDidMount')
//     const {setParams} = this.props.navigation;

//     setParams({imageURL: this.state.imageURL});
   
//   }





// static navigationOptions = ({ navigation }) => {

//     const {state} = navigation;
//     if(state.params != undefined){
//       return { 

//           headerStyle: {
//               backgroundColor: navigation.getParam('BackgroundColor', 'white'),
//             },
//             //Heading text color
//             headerTintColor: navigation.getParam('HeaderTintColor', 'black'),
            
//             headerRight: (
//               <TouchableOpacity style={{margin:25, justifyContent:'center',alignItems:'center'}}
//                                onPress={()=> navigation.navigate('Settings')}>
//                                    <Feather name="settings" size={32} />
//               </TouchableOpacity>
//             ),


//           headerLeft: (
//               <View style={{padding:5, justifyContent:'center', alignItems:'flex-start', flexDirection:'row'}}>
//                    <TouchableOpacity onPress={this.settingsPressed}>
//                       <Avatar
//                       rounded
//                       size="large"
//                       source={{
//                           uri: state.params.imageURL
//                       }}
//                       //`${navigation.state.params.image}`
//                       containerStyle={{flex: 2, marginTop: -20}}
      
//                   />
//                    </TouchableOpacity>
                   
                  
//                 <View style={{margin:15, justifyContent:'center',alignItems:'flex-start', flexDirection:'column'}}>
//                     <Text style={{fontWeight:'bold',fontSize:20}}>Welcome Mr.X</Text>
//                     <Text>xyz@gmail.com</Text>
//                 </View>
               
//               </View>
           
    
//           ),
//       }
//     }
 
// }
    
