import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function Task({ selected, index, item, onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress(index)} style={{ paddingHorizontal: 10, backgroundColor: selected == index ? "grey" : "yellow", height: 100, flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
            <MaterialIcons name={selected == index ? "circle" : 'check-circle'} size={40}></MaterialIcons>

            <Text style={{ fontSize: 20 }}>Task: {item.name}</Text>
            <Text style={{ fontSize: 20 }}>Time: {item.time}</Text>

        </TouchableOpacity>
    )
}
