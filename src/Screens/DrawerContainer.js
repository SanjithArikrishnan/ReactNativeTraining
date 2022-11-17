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
import AppData from "../context/AppData"
import { MyDrawer } from '../navigation/Drawer'




export default function DrawerContainer({ navigation, route }) {


    return (

        <AppData>
            <MyDrawer></MyDrawer>
        </AppData>



    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },

});

