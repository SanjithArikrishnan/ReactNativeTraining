
 import React, { useState } from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
   FlatList
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
 
 const App: () => Node = () => {
   const [selected, setSelected] = useState(-1)
   const DATA = [
   
   {
     id: "1",
     icon:"check-circle-outline", 
   },
   
   {
    id: "2",
    icon:"check-circle-outline", 
   },
   
   {
     id: "3",
     icon:"check-circle-outline",
   },
   
   ];
   
   const renderItem=({item,index}) =>{
   const onPress = (index)=>{
     setSelected(index)
   }
   return(
     <View>
     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start'}}>
         <TouchableOpacity onPress={()=>onPress(index)} >
         <MaterialIcon name={selected==index ? "check-circle-outline":"circle"} size={70} > </MaterialIcon>
         <Text style={{fontSize:30}}>{item.name}</Text>
         </TouchableOpacity>      
       </View>
     
       </View>  
      )
   
       }
       return (
         <View>
         <FlatList
           data={DATA}   
           renderItem={renderItem}  
           keyExtractor={(item) => item.id} />   
     </View>  
     );        
     };
     
 export default App;
 