import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch } from "react-redux";
import { donor_data } from "../Store/Actions/Actions";

const Home = ({ navigation }) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(donor_data())
    }, [])

    return (
        <View>
            <Text>Home </Text>
            <Button
                title="Go to Donors"
                onPress={() => navigation.navigate('donors')}
            />

            <Button
                title="Go to Request"
                onPress={() => navigation.navigate('request')}
            />
        </View>
    )
}

export default Home
