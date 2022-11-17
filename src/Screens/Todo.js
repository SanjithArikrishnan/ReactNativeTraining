/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet, View, Button
} from 'react-native';
import CreateTask from '../components/CreateTask';
import TaskContainer from '../components/TaskContainer';


export default function Todo({ navigation, route }) {
    //const isDrawerOpen = useDrawerStatus() === 'open';



    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center',
            }}>
                <CreateTask></CreateTask>
                <TaskContainer ></TaskContainer>
               
                <Button  title={"Next"} onPress={() => { navigation.navigate('Next',) }}></Button>



            </View>
        </SafeAreaView >



    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },

});

