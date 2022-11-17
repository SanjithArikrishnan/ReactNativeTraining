



import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { multiply } from 'react-native-reanimated';
//import { AppContext } from '../context/AppData';
import { addTask } from '../redux/reducers/taskSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function CreateTask() {
    const [name, setName] = useState("")
    const [time, setTime] = useState(0)
    //const { data, dispatchDataEvent } = useContext(AppContext)
    const data = useSelector((state) => state.tasks)
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        setName("")
        setTime("")

    }, [data])

    const onPress = () => {
        const newTask = {

            id: data.length + 1,
            name,
            done: false,
            time

        }
        setModalIsVisible(true)
        dispatch(addTask(newTask))



    }

    // const employees = [
    //     {

    //         salary: 10000

    //     },
    //     {
    //         id: "Teja",
    //         salary: 20000

    //     }
    // ]
    // const id = employees[0].id
    // const salary = employees[0].salary


    // const { id = "NoName", salary } = employees[0]
    // console.log("OOOOOOOO", id, salary)

    // const numberList = [
    //     1, 2, 5
    // ]
    // console.log(employees.reduce((finalSum, employee) => {
    //     return [...finalSum, { name: employee.name }]
    // }, []
    // )
    // )
    // console.log(numberList.reduce((finalSum, second) => {
    //     return finalSum + second
    // }
    // ))

    // const multiply = (num1 => {
    //     return (num2) => num1 * num2
    // })
    // const multiplyFunction = multiply(2)
    // console.log("xxxxxxxxx", multiplyFunction(3))



    return (
        <>
            <View style={{
                backgroundColor: '#C4EE80', borderRadius: 10,
                shadowColor: "#000",
                width: "50%", shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.5,
                shadowRadius: 6,
                elevation: 2,
                marginTop: 100,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Text style={{ fontSize: 20,fontFamily:'Quicksand-Bold' }}>Add Task</Text>

                <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>

                    <Text style={{fontFamily:'Sono-Regular'}}>Task:</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}></TextInput>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                    <Text style={{fontFamily:'Sono-Regular'}}>Time:</Text>
                    <TextInput
                        value={time}
                        onChangeText={setTime}></TextInput>
                </View>
                <Button title={"Add Task"} onPress={onPress}></Button>
            </View>
            {data.length > 0 &&
                <Modal
                    visible={modalIsVisible}
                    transparent={true}
                    animationType='slide'
                >
                    <View
                        style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <View style={{
                            backgroundColor: '#C4EE80', height: 100, width: 175, borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 6,
                            elevation: 2,
                            marginTop: 100,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 15 }}>Task {data[data.length - 1].name} has been added</Text>
                            <TouchableOpacity onPress={() => setModalIsVisible(false)}><Text>Hide Modal</Text></TouchableOpacity>
                        </View>
                    </View>

                </Modal>
            }

        </>
    )
}
