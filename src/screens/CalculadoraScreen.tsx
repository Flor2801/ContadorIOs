import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import styles from '../themes/appTheme'


const CalculadoraScreen = () => {
    return (
        <View style={ styles.calculadoraContainer }>
            <Text style={ styles.subResultado }>0000</Text>
            <Text style={ styles.resultado }>1,500</Text>
        </View>
    )
}

export default CalculadoraScreen;
