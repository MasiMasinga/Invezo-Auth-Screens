import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import GetStarted from '../screens/GetStarted';
import Register from '../screens/Register';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation;