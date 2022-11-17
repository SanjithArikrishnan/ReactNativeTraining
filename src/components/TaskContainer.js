



import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
//import { AppContext } from '../context/AppData';
import { removeTask } from '../redux/reducers/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

import Task from './Task';
import Card from './Card';


export default function TaskContainer() {
    const [selected, setSelected] = useState(-1)
    const [pendingTasks, setPendingTasks] = useState(0)
    const data = useSelector((state) => state.tasks)
    const dispatch = useDispatch()


    useEffect(() => {
        const pending = (data.filter(item => item.done == false)).length
        setPendingTasks(pending)

    }, [data]);




    const onPress = (idToRemove) => {
        // dispatchDataEvent("REMOVE_TASK", data.filter((item) => parseInt(item.id) != idToRemove))
        dispatch(removeTask(data.filter((item) => parseInt(item.id) != idToRemove)))
        console.log(data)
    }



    const renderItem = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Task selected={selected} index={index} item={item} onPress={() => onPress(item.id)} data={data}></Task>
                <View style={{
                    flex: 1,
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>


                </View>
            </View>
        )
    }
    return (
        <Card>
            <Text>Pending Tasks: {pendingTasks}</Text>

            {data &&
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}>

                </FlatList>
            }



        </Card>
    )
}
