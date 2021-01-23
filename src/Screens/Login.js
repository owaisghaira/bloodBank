import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { useSelector,useDispatch } from "react-redux";
import { sign_in } from "../Store/Actions/Actions";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch()
    // console.log(transaction)
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: 'https://professionalbenefitsolutionstn.com/wp-content/uploads/2019/12/4866328d-f324-4cda-b5fe-8e0e289aad51.png' }} />
            <Text style={styles.text}>Blood Bank</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign In"   
            onPress={() => dispatch(sign_in({email,password}))}
            />

            <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
            />
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('signup')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount? Create here </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 30,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
})
