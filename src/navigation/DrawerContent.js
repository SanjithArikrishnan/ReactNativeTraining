import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Linking
} from 'react-native';

export function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="About Company"
                onPress={() => Linking.openURL('https://www.indiumsoftware.com/')}
            />
        </DrawerContentScrollView>
    );
}