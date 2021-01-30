import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FormInput from '../components/Input'
import FormButton from '../components/FormButton'
import { useDispatch, useSelector } from "react-redux";
import { donor_data } from '../Store/Actions/Actions'
import database from '@react-native-firebase/database';
import { set } from 'react-native-reanimated';


const AddDonor = ({ navigation }) => {
    let { coordinate } = useSelector((state) => state.DonorReducer)

    const dispatch = useDispatch()
    const [donor, setDonor] = useState({ name: '', dateOfBirth: '', bloodGroup: '', phone: '', city: '' });
    // const [post, setpost] = useState({latitude: '', longitude: '',})

    const postdonor = () => {
        if (coordinate.latitude === undefined) {
            alert("pick location first...")
        }else if(donor.name === ''|| donor.bloodGroup === ''){
            alert("Fill Complete Form")
        } 
        else {
            database().ref('/').child("donors").push({ ...donor, ...coordinate })
                .then(() => {
                    alert('added successful')
                    dispatch(donor_data())

                }).catch((error) => {
                    alert(error)
                });
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Blood Donor</Text>
            <FormInput
                labelValue={donor.name}
                onChangeText={(e) => setDonor({ ...donor, name: e })}
                placeholderText="Enter Your Name"
                iconType="user"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={donor.dateOfBirth}
                onChangeText={(e) => setDonor({ ...donor, dateOfBirth: e })}
                placeholderText="Date of Birth"
                iconType="mail"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={donor.bloodGroup}
                onChangeText={(e) => setDonor({ ...donor, bloodGroup: e })}
                placeholderText="Blood Group"
                iconType="mail"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={donor.phone}
                onChangeText={(e) => setDonor({ ...donor, phone: e })}
                placeholderText="phone"
                iconType="mail"
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            {/* <FormInput
                labelValue={donor.location}
                onChangeText={(e) => setDonor({ ...donor, location: e })}
                placeholderText="Location"
                iconType="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            /> */}
            <FormInput
                labelValue={donor.city}
                onChangeText={(e) => setDonor({ ...donor, city: e })}
                placeholderText="City"
                iconType="lock"
            />
            <FormButton
                buttonTitle="Add Location"
                onPress={() => navigation.navigate('addmap')}
            />
            <FormButton
                buttonTitle="Add Donor"
                onPress={() => postdonor()}
            />

        </View>
    )
}

export default AddDonor

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 20,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
})


