/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Button, SafeAreaView,
    StyleSheet, Text, View
} from 'react-native';






export default function Help({ navigation, route }) {

    // const users = [
    //     {
    //         id: 1,
    //         name: "Jack",
    //         isActive: true,
    //         age: 20,
    //     },
    //     {
    //         id: 2,
    //         name: "John",
    //         isActive: true,
    //         age: 18,
    //     },
    //     {
    //         id: 3,
    //         name: "Mike",
    //         isActive: false,
    //         age: 30,
    //     },
    // ];

    // const getNames = () => {
    //     console.log(users.map((item) => { return item.name }))
    //     return 0

    // }
    // const addUser = () => {

    //     console.log([...users, {
    //         id: 5,
    //         name: "betsy",
    //         isActive: false,
    //         age: 40
    //     }])
    //     console.log(users)

    // }


    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{
                flex:1,justifyContent:'center',alignItems:'center'
            }}>
        <Text style={{fontSize:20,fontFamily:'Quicksand-Bold',}}>How Can We Help You!</Text>
        
        <Text style={{fontSize:20,fontFamily:'NotoSerif-Italic'}}>Contact us: abcd@gmail.com</Text>
        
        </View>
        
        <Button title={"Home"} onPress={() => { navigation.navigate('Todo') }}></Button>
        <Button title={"Go back"} onPress={() => { navigation.goBack() }}></Button>

        </SafeAreaView>
        );
            
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },

});

