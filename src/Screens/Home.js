import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { useDispatch } from "react-redux";
import { donor_data } from "../Store/Actions/Actions";
import { Content, Card, CardItem, Body } from 'native-base';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(donor_data())
    }, [])

    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 24 }}>

                <Content >
                    <Card style={styles.cardstyle1}>
                        <CardItem footer header bordered>
                            <Text style={{ fontSize: 20, }}>Blood Donors List</Text>
                        </CardItem>
                        <CardItem button
                            onPress={() => navigation.navigate('donors')} >
                            <Text style={{ backgroundColor: 'blue', paddingHorizontal: 15, padding: 8, borderRadius: 10, color: '#fff' }}>No. of active donors list</Text>
                        </CardItem>

                    </Card>
                </Content>
                <Content >
                    <Card style={styles.cardstyle2}>
                        <CardItem footer header bordered>
                            <Text style={{ fontSize: 20, }}>Blood Donors Map View</Text>
                        </CardItem>

                        <CardItem button
                            onPress={() => navigation.navigate('donorsmap')} >
                            <Text style={{ backgroundColor: 'green', paddingHorizontal: 15, padding: 8, borderRadius: 10, color: '#fff' }}>Blood Donors Nearby You</Text>
                        </CardItem>

                    </Card>
                </Content>
                <Content   >
                    <Card
                        style={styles.cardstyle3}>
                        <CardItem
                            onPress={() => navigation.navigate('addDonor')}
                            button footer header bordered>
                            <Text style={{ fontSize: 20, }}>Become A Blood Donor</Text>
                        </CardItem>
                        <CardItem button
                            onPress={() => navigation.navigate('addDonor')}
                        >
                            <Text style={styles.btn}>Save Humanity</Text>
                        </CardItem>
                    </Card>
                </Content>

                {/* <Button
                title="Go to Donors"
                onPress={() => navigation.navigate('donors')}
            />

            <Button
                title="Go to map"
                onPress={() => navigation.navigate('donorsmap')}
            /> */}


            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    containe: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 25
    },
    cards: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        margin: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    cardstyle1: {
        alignItems: 'center',
        borderRadius: 15,
        borderBottomWidth: 10,
        borderBottomColor: 'blue'
    },
    cardstyle2: {
        alignItems: 'center',
        borderRadius: 15,
        borderBottomWidth: 10,
        borderBottomColor: 'green'
    },
    cardstyle3: {
        alignItems: 'center',
        borderRadius: 15,
        borderBottomWidth: 10,
        borderBottomColor: 'red'
    },
    btn: {
        backgroundColor: 'red',
        padding: 8,
        paddingHorizontal: 50,
        borderRadius: 10,
        color: '#fff'
    }

});
