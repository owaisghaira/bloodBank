import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DawerContent } from "./DawerContent";

const Tab = createMaterialBottomTabNavigator();

import Home from '../Screens/Home'
import Donors from '../Screens/Donors'
import AddDonors from '../Screens/addDonor'
import Request from '../Screens/bloodRequest'
import AddRequest from '../Screens/addRequest'

import Icon from 'react-native-vector-icons/Ionicons'

const homeStack = createStackNavigator();

const mainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="home"
      component={homeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="donors"
      component={donorStackScreen}
      options={{
        tabBarLabel: 'Donors',
        tabBarIcon: ({ color }) => (
          <Icon name="people" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="addDonor"
      component={AdddonorStackScreen}
      options={{
        tabBarLabel: 'Add Donor',
        tabBarIcon: ({ color }) => (
          <Icon name="person-add" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="request"
      component={RequestStackScreen}
      options={{
        tabBarLabel: 'Blood Request',
        tabBarIcon: ({ color }) => (
          <Icon name="flask" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="addrequest"
      component={AddRequestStackScreen}
      options={{
        tabBarLabel: 'Add Request',
        tabBarIcon: ({ color }) => (
          <Icon name="add-circle" color={color} size={26} />
        ),
      }}
    />

  </Tab.Navigator>
)

const homeStackScreen = ({ navigation }) => (
  <homeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '700',
      color: '#fff'
    }
  }} >

    <homeStack.Screen name="Home" component={Home}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)
const donorStackScreen = ({ navigation }) => (
  <homeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '700',
      color: '#fff',
    }
  }} >

    <homeStack.Screen name="Donors" component={Donors}
      options={{
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)
const AdddonorStackScreen = ({ navigation }) => (
  <homeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '700',
      color: '#fff',
    }
  }} >

    <homeStack.Screen name="Add Donor" component={AddDonors}
      options={{
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)
const RequestStackScreen = ({ navigation }) => (
  <homeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '700',
      color: '#fff',
    }
  }} >

    <homeStack.Screen name=" Blood Requests" component={Request}
      options={{
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)

const AddRequestStackScreen = ({ navigation }) => (
  <homeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '700',
      color: '#fff',
    }
  }} >

    <homeStack.Screen name="Add Blood Requests" component={AddRequest}
      options={{
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    // <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home}  />
    //     <Stack.Screen name="donors" component={Donors}  />
    //     <Stack.Screen name="request" component={Request}  />
    // </Stack.Navigator>
    <Drawer.Navigator drawerContent={props => <DawerContent {...props} />}>
      <Drawer.Screen name="home" component={mainTabScreen} />
      {/* <Drawer.Screen name="donors" component={donorStackScreen} /> */}
      {/* <Drawer.Screen name="Request" component={Request} /> */}
    </Drawer.Navigator>
  )
}

export default AppStack
