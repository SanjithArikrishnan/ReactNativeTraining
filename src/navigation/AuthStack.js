import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Help from '../Screens/Help';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login';
import { HomeStack } from './HomeStack';
import { MyDrawer } from './Drawer';




const Stack = createNativeStackNavigator();



export function AuthStack() {
    return (

        <NavigationContainer>

            <Stack.Navigator
            
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Tasks"
                    component={MyDrawer}
                    options={{ headerShown: false, }}
                />

            </Stack.Navigator>
        </NavigationContainer>

    );
};