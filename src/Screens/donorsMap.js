import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, Button } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { get_currentLocation } from "../Store/Actions/Actions";
import { useDispatch } from "react-redux";


const donorsMap = ({ navigation }) => {
    const dispatch = useDispatch()
    // const [latitude, setLatitude] = useState(0);
    // const [longitude, setLongitude] = useState(0);
    const [coordinate, setCoordinate] = useState({ latitude: 0, longitude: 0 })
    const [error, setError] = useState(null);

    useEffect(() => {
        // Geolocation.getCurrentPosition(info => console.log(info));
        Geolocation.getCurrentPosition
            (position => {

                setCoordinate({ longitude: position.coords.longitude, latitude: position.coords.latitude })

            }, error => setError(error),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
            )
    }, [])

    const handleMap = () => {
        dispatch(get_currentLocation(coordinate))
        navigation.navigate('addDonor')
    }

    


    let { latitude, longitude } = coordinate
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                showsMyLocationButton
                onPress={(e) => {
                    setCoordinate(e.nativeEvent.coordinate)
                }}
            >

                <Marker
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude,
                    }}
                    image={require('../Images/map_marker.png')}
                    title="Test Title"
                    description="This is the test description"
                />

            </MapView>
            <View style={{ marginTop: 480 }}>
                <Button
                    style={styles.button} title='Pick Location'
                    // onPress={() => navigation.navigate('addDonor', {
                    //     latitude,
                    //     longitude,
                    // }
                    // )}
                    onPress={() => handleMap()}
                />
            </View>
        </View>
    )
}

export default donorsMap

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: "100%",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    button: {
        justifyContent: 'flex-end',
        margin: 10
    }
});