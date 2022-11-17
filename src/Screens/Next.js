/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet, View, Text, Button, ActivityIndicator, FlatList, Image, useWindowDimensions
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/reducers/userSlice';

export default function Next({ navigation, route }) {
    // const [data, setData] = useState([]);
    const { width, height } = useWindowDimensions();

    const data = useSelector((state) => state.users)
    const dispatch = useDispatch()


    const [isLoading, setLoading] = useState(true);


    const getUsers1 = () => {

        try {
            fetch('https://reqres.in/api/users?page=2')
                .then((res) =>

                    res.json()
                )
                .then((json) => {

                    console.log(json)
                    setData(json.data)
                })


                .catch((err) => {
                    console.log(err.response)
                })

            setLoading(false);



        } catch (error) {
            console.log(error);
        } finally {
        }
    }

    useEffect(() => {
        dispatch(getUsers())
        setLoading(false)

    }, []);


    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center'
            }}>
                <Text style={{ fontSize: 20,color:'red',fontFamily:'Quicksand-Bold' }}>Hey Admin! </Text>
                {isLoading == true ? <ActivityIndicator size="large" color="#00ff00" /> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={{
                                paddingHorizontal: 10, height: 70, justifyContent: 'space-evenly', width: width - 50, flexDirection: 'row', backgroundColor: 'pink', borderColor: '#8024b1', borderRadius: 10, alignItems: 'center', marginBottom: 10
                            }}>
                                <View style={{ width: '75%' }}>
                                    <Text style={{ fontSize: 16, fontFamily:'Sono-Bold',color:'black' }}> {item.first_name}</Text>
                                    <Text style={{ fontSize: 12, fontFamily:'Quicksand-Medium' ,color:'blue'}}>{item.email}</Text>
                                </View>
                                <View style={{ width: '25%', alignItems: 'flex-end' }}>
                                    <Image source={{ uri: item.avatar }} style={{ height: 50, width: 50, borderTopLeftRadius: 1, borderBottomRightRadius: 1, borderColor: 'blue', borderWidth: 1 }}></Image>
                                </View>
                            </View>

                        )}
                    />
                )
                }


            </View>
            <Button title={"Next "} onPress={() => { navigation.navigate('Third', ) }}></Button>
            <Button title={"Home"} onPress={() => { navigation.navigate('Todo', ) }}></Button>
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

