import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { useSelector } from "react-redux";
import DonorCard from "../components/Donorcard";

const Donors = ({ navigation }) => {
    let { transaction } = useSelector((state) => state.DonorReducer)

    return (

        <ScrollView>
            {transaction.map((v,i) => (
                <DonorCard  key={i} value={v} />
            ))}

        </ScrollView>


    )
}

export default Donors

const styles = StyleSheet.create({})
