import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const donorsMap = () => {
    // const [latitude, setLatitude] = useState(0);
    // const [longitude, setLongitude] = useState(0);
    const [coordinate, setCoordinate] = useState({ latitude: 0, longitude: 0 })
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(coordinate)
        // Geolocation.getCurrentPosition(info => console.log(info));
        Geolocation.getCurrentPosition
            (position => {

                // setLatitude(position.coords.latitude)
                // setLongitude(position.coords.longitude)
                setCoordinate({ longitude: position.coords.longitude, latitude: position.coords.latitude })

            }, error => setError(error),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
            )
    }, [])


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
                    console.log(e.nativeEvent.coordinate)
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
});