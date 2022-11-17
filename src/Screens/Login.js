



import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';


export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")






    const onPress = (email = "eve.holt@reqres.in") => {
        console.log(email)
        const data = {
            email: email,
            password: "cityslicka"
        }
        try {
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.token);
                    if (json.token)
                        navigation.replace('Tasks')
                    else {
                        console.log(json.error)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })




        } catch (error) {
            //     console.log(error);
        } finally {
            // navigation.navigate('Tasks')
        }



    }



    return (
        <>
            <View style={{
                backgroundColor: 'skyblue', borderRadius: 15,
                shadowColor: "black",
                width: "75%",alignContent:'center',alignSelf:'center', shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.5,
                shadowRadius: 6,
                elevation: 2,
                marginTop: 100,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Text style={{fontSize: 20, color:'black',fontFamily:'Roboto-Bold' }}>LogIn</Text>

                <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 30, fontWeight:'bold',color:'black' }}>

                    <Text style={{ fontSize: 15, fontFamily:'Quicksand-Medium',color:'black' }}>Email Id:</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}></TextInput>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', fontWeight: 'bold',color:'black' }}>

                    <Text style={{ fontSize: 15, fontFamily:'Quicksand-Medium',color:'black' }}>Password:</Text>
                    <TextInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}></TextInput>
                </View>
                <Button title={"Login"} onPress={() => onPress()}></Button>
            </View>


        </>
    )
}
