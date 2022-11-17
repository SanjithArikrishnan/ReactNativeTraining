import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
  Pressable,
  TextInput,
  Item,
  Span,
  ScrollView,
  text,
  onChangeText,
  StatusBar,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  KeyboardAvoidingView,
  View,
  DrawerLayoutAndroid,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const App: () => Node = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [name, setname] = useState('');
  const [count, setCount] = useState(0);
  const [pendingTask, setPendingTask] = useState(0);
  const [data, setdata] = useState([
    {
      name: 'Eat Pizza',
      completed: false,
     },
    {
     name: 'Workout',
      completed: false,
     },
   
  ]);


  const addItem = () => {
    console.log(name);
    const newTask = {
      id: 1 + data.length,
      name: name,
      completed:false
    };
    setdata([...data, newTask]);
  };  


  const completeTask = index => {
    const newTasks = [...data];
    newTasks[index].completed = true;
    console.log(newTasks);
    setdata(newTasks);
    console.log(data)
};

useEffect(()=>{
  let counts=data.length
 setPendingTask((data.filter(item =>item.completed==false ).length));
}, [data])


  const handleDelete = id => {
    console.log(id);
    setdata(data.filter(item => item.id !== id));
  };


  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
   
    return (

      <View style={{backgroundColor:"white",width:500,height:80}}>
        <View style={{borderRadius: 6,borderBottomColor:'red',borderColor:'red'}}>
        <Text  style={{fontSize: 30,margin: 5,fontWeight: '400',
            flexDirection: 'row',justifyContent: 'center',
            color:'black',textDecorationLine:item.completed==true?"line-through":'none'}} 
            
             >{item.name}
             
              {"  "}<MaterialIcon name="check-circle" size={40} color="green" title="Completed" onPress={() => completeTask(index) } textDecorationLine={data==false? "line-through" : "" }/>
              {"  "}<MaterialIcon name="close-box" size={40} color="red" title="Delete" onPress={() => handleDelete(item.id)} />
           
        </Text>
        </View>
      </View>
    );
  };

  return (
    <>
    <Text 
    style={{
      color:"white",
      height:50,
      width:'100%',
      fontWeight: "bold",
      fontSize:30,
      textAlign:"center",
      backgroundColor:"purple"}}>To-Do List</Text>
   
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={{backgroundColor:"purple",height:500,width:350,borderRadius:10}}>
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
        <Text
            style={{
              flexDirection:'row',
              fontSize: 20,
              fontWeight: 'bold',
              color:'white',
            }}>
          Pending Tasks : {pendingTask}</Text>    
      </View>
    <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          completeTask={completeTask}/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput onChangeText={value => {setname(value);}}
        style={{
          height:50,
          width:200,
          margin: 32,
          borderRadius: 10,
          borderWidth: 2,
          padding: 10,
          backgroundColor: 'white',
          color:'black'
        }}/> 
    <Text>{"\n\n"}</Text>
    <TouchableOpacity 
    onPress={()=>addItem()} 
    style={{padding:2,margin:50,borderRadius:10,}} >
            <Text 
            style={{
              color:"white",
              height:25,
              width:100,
              fontWeight:"bold",
              fontSize:20,
              textAlign:"center",
              borderRadius:10,
              backgroundColor:"purple"}}>ADD</Text>
      </TouchableOpacity>  
  
          </View>
      </View>     
    </View>
    </>
  );
};

export default App;
