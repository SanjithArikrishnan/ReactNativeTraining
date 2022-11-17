import { createDrawerNavigator } from '@react-navigation/drawer';
import Help from '../Screens/Help';
import FirstProject from '../Screens/FirstProject';
import SecondProject from '../Screens/SecondProject';
import HomeScreen from '../Screens/HomeScreen';
import { HomeStack } from './HomeStack';
import { CustomDrawerContent } from './DrawerContent';



const Drawer = createDrawerNavigator();


export function MyDrawer() {
    return (

        <Drawer.Navigator initialRouteName={'Todo'} backBehavior={'firstRoute'} screenOptions={{
            drawerStyle: {
                backgroundColor: 'white',
                width: 240,
            }, drawerActiveBackgroundColor: 'white'
        }} drawerContent={(props) => <CustomDrawerContent {...props} />}>

            <Drawer.Screen name="Tasks" component={HomeStack} options={{ drawerActiveBackgroundColor: 'white', }} />
            <Drawer.Screen name="First Project" component={FirstProject} />
            <Drawer.Screen name="Second Project" component={SecondProject} />
            <Drawer.Screen name="Plant App" component={HomeScreen} />
            <Drawer.Screen name="Help" component={Help} />
        </Drawer.Navigator>

    );
}