import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'

const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} options={{ header: () => null }} />
            <Stack.Screen name="signup" component={SignUp} options={{ title: '', headerStyle: { backgroundColor: '#f9fafd', elevation: 0 } }} />
        </Stack.Navigator>
    )
}
