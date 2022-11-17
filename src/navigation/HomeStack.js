import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from '../Screens/Todo';
import Next from '../Screens/Next';
import Third from '../Screens/Third';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

import FirstProject from '../Screens/FirstProject';
const Stack = createNativeStackNavigator();
const NewStack = createNativeStackNavigator();


export function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'blue',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily:'Quicksand-Bold'
                },
            }}>
            <Stack.Screen
                name="Todo"
                component={Todo}
                options={{ title: 'Welcome' }}
            />
           
            <Stack.Screen
                name="Next"
                component={Next}
                options={{ title: 'Peoples' }}
            />
            <Stack.Screen
                name="Third"
                component={Third}
                options={{ title: 'Images' }}     
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
             <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{ title: 'About' }}
            />
        </Stack.Navigator>

    );
};