import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { useSelector, useDispatch } from "react-redux";

const Router = () => {
    let { user } = useSelector((state) => state.LoginReducer)

    return (
        <NavigationContainer>
            {/* {user.email ? <AppStack /> : <AuthStack />} */}
        <AppStack/>

        </NavigationContainer>
    )
}

export default Router
