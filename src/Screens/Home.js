import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch } from "react-redux";

const Home = ({ navigation }) => {
    const dispatch = useDispatch()

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
