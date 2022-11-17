import { StyleSheet, useWindowDimensions } from 'react-native';
import { margin, padding } from './spacing';
import * as colors from './color'



export default globalStyles = StyleSheet.create({

    selectGreenButton: {
        backgroundColor: colors.APP_GREEN,
        width: 110,
        height: 29,
        borderRadius: 3,
    },
    imageSliderView: {
        backgroundColor: colors.APP_IMAGE_GREY,
        width: 280,
        height: 210,
        borderRadius: 5,
        borderColor: colors.APP_BORDER_GREY,
        borderWidth: 1
    },
    pagingView: {
        backgroundColor: colors.APP_GREEN,
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#000',
        marginEnd: 5

    },
    pagingViewUnselected: {
        backgroundColor: colors.APP_BORDER_GREY,
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#000',
        marginEnd: 5



    },

});