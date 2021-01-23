import React from 'react'
import { View, Text, Button } from 'react-native'
import FormButton from "../components/FormButton";
import { useDispatch,useSelector } from "react-redux";
import { sign_out } from "../Store/Actions/Actions";

const Home = () => {
    const dispatch = useDispatch()
    
    return (
        <View>
            <Text>Home </Text>
            <FormButton
                buttonTitle="Logout"
                onPress={() => dispatch(sign_out())}

            />

        </View>
    )
}

export default Home
