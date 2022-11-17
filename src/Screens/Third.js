/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    Button, FlatList, SafeAreaView,
    StyleSheet, Text, TouchableOpacity, View, Image
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import globalStyles from '../theme/common';
import Entypo from 'react-native-vector-icons/Entypo';
import * as colors from '../theme/color';
import { addImages } from '../redux/reducers/imgSlice';
import { useDispatch, useSelector } from 'react-redux';



//import Carousel from 'react-native-snap-carousel';


export default function Third({ navigation, route }) {
    //const [img, setImg] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const flatRef = useRef();
    // const [index,setIndex] = useState(0);
    const [ind,setInd] = useState(0);
    const img = useSelector((state)=> state.images);
    const dispatch = useDispatch();


    useEffect(() => {

        setTimeout(() => { Image() }, 2000)

    }, [ind, img])

    const _renderItem = ({ item, index }) => {
        return (
            <>
                <View key={index} style={globalStyles.imageSliderView}>
                    <Image style={{
                        width: "100%",
                        borderRadius: 5,
                        height: "100%"
                    }}
                        resizeMode={"cover"}
                        source={{ uri: item.uri }}
                    />
                    <TouchableOpacity style={{ position: "absolute", top: 5, backgroundColor: "#ffffff", borderRadius: 12 }} onPress={() => { deleteImage(index) }}>
                        <Entypo name={'circle-with-cross'} color={colors.DARK_GREY} size={24} />
                    </TouchableOpacity>

                </View>

            </>
        )
    }
    const _renderItemPage = ({ item, index }) => {
        return (
            <>
                <View key={index} style={selectedIndex == index ? globalStyles.pagingView : globalStyles.pagingViewUnselected}>

                </View>

            </>
        )
    }

    const deleteImage = (index) => {
        let imageList = img;


        let spliced = imageList.splice(index, 1)
        console.log(imageList)



        // setImg([...imageList])


    }
    const openImagePicker = () => {
        let imageList = [];
        ImageCropPicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
            compressImageQuality: 0.8,
            maxFiles: 10,
            mediaType: 'any',
            includeBase64: true
        }).then(response => {
            // console.log('Response'.substr(3), response)
            response.map(image => {
                if (Platform.OS === 'ios')
                    imageList.push({
                        name: image.filename,
                        uri: image.path,
                        type: image.mime,

                    })
                else {
                    //  console.log('data', image)
                    const uriParts = image.path.split('.');
                    const fileType = uriParts[uriParts.length - 1];
                    //console.log('data', uriParts, fileType)

                    imageList.push({
                        name: image.path.substr(image.path.lastIndexOf('/') + 1),
                        uri: image.path,
                        type: `image/${fileType}`,

                    })
                }


            })
            console.log(imageList)

            //setImages(Object.assign([], imageList))

            dispatch(addImages([...img, ...imageList]))
            console.log(img)

        }).catch(e => console.log('Error', e))

    }

const Image=()=> {
const len=img.length;
if(len>0 && flatRef.current)
{
  if(ind<len-1)
  {
    flatRef.current.scrollToIndex({index:ind+1})
    setInd(ind+1)
  }
  else
  {
    flatRef.current.scrollToIndex({index:0})
    setInd(0)
  }
}
           
    }


    const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
        setSelectedIndex(viewableItems[0].index)
    }, []);

    const _viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }



    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center'
            }}>
                {/* <Text style={{ fontSize: 20 }}>Hey</Text> */}


                <View style={[globalStyles.imageSliderView, { marginTop: 5, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 1}]}>

                    <>
                        <FlatList
                            ListEmptyComponent={<View><Text>No images uploaded</Text></View>}
                            ref={flatRef}
                            data={img}
                            onViewableItemsChanged={_onViewableItemsChanged}
                            viewabilityConfig={_viewabilityConfig}
                            renderItem={_renderItem}
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        />


                    </>
                </View>
                <TouchableOpacity style={[globalStyles.selectGreenButton, { justifyContent: 'center', alignItems: 'center' }]}
                    onPress={() => openImagePicker()}>
                    <Text style={{ color: 'white' }}>
                        Upload files
                    </Text>
                </TouchableOpacity>

                <Text>{"\n"}</Text>

                <TouchableOpacity style={[globalStyles.selectGreenButton, { justifyContent: 'center', alignItems: 'center' }]}
                    onPress={() => openImagePicker()}>
                    <Text style={{ color: 'white' }}>
                        Scroll images
                    </Text>
                </TouchableOpacity>


                </View>
           
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

