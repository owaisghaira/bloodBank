import React from 'react'
import { View, } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Title, Avatar, Caption, Drawer, Text, TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons'

import { useDispatch, useSelector } from "react-redux";
import { sign_out } from "../Store/Actions/Actions";

export function DawerContent(props) {
    let { user } = useSelector((state) => state.LoginReducer)
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView >
                <View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Avatar.Image
                            source={{ uri: 'https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png' }}
                            size={50}
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Title>User Info</Title>
                            <Caption>{user.email}</Caption>
                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    label='Sign Out'
                    icon={({ color, size }) => (
                        <Icon
                            name="exit"
                            color={color}
                            size={size}
                        />
                    )}
                    onPress={() => { dispatch(sign_out()) }}
                />
            </Drawer.Section>
        </View>
    )
}
