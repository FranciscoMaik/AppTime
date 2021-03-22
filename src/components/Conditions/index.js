import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions({ weather }){
    return(
        <View style={styles.container}>
            <View style={styles.condition}>
                <Feather name="wind" color="#1ed6ff" size={23}/>
                <Text>{weather.results.wind_speedy}</Text>
            </View>

            <View style={styles.condition}>
                <MaterialCommunityIcons name="weather-sunset-up" color="#1ed6ff" size={23}/>
                <Text>{weather.results.sunrise}</Text>
            </View>

            <View style={styles.condition}>
                <MaterialCommunityIcons name="weather-sunset-down" color="#1ed6ff" size={23}/>
                <Text>{weather.results.sunset}</Text>
            </View>

            <View style={styles.condition}>
                <Feather name="droplet" color="#1ed6ff" size={23}/>
                <Text>{weather.results.humidity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        padding: 10,
        backgroundColor: "#ffffff",

        flexDirection: "row",
        width: "95%",
        justifyContent: "space-around",
        borderRadius: 8,
    },
    condition:{
        alignItems: "center",
        justifyContent: "center",
    }
});