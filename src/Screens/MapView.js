import React, { useEffect,useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector } from "react-redux";
import Geolocation from '@react-native-community/geolocation';


const DonorsMap = ({ navigation }) => {
    let { transaction } = useSelector((state) => state.DonorReducer)
    const [coordinate, setCoordinate] = useState({ latitude: 24.860966, longitude:  66.990501 })
    const [error, setError] = useState(null);
    // console.log("fire",transaction[0].latitude)
    useEffect(() => {
        // Geolocation.getCurrentPosition(info => console.log(info));
        Geolocation.getCurrentPosition
            (position => {

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
            // onPress={(e) => {
            //     setCoordinate(e.nativeEvent.coordinate)
            // }}
            >
                {transaction.map((v, i) => (
                    <Marker key={i}
                        coordinate={{
                            latitude: v.latitude,
                            longitude: v.longitude,
                        }}
                        image={require('../Images/map_marker.png')}
                        title={v.name}
                        description={v.phone}
                    />
                ))}


            </MapView>
        </View>
    )
}

export default DonorsMap

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
