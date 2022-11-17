



import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



export default function Card(props) {


    return (
        <View
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center', padding: 10, marginTop: 50 }}
        >
            {props.children}



        </View>
    )
}
