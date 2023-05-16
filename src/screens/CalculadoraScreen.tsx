import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import styles from '../themes/appTheme'
import BotonCalc from '../components/BottonCalc'


const CalculadoraScreen = () => {
    return (
        <View style={ styles.calculadoraContainer }>
            <Text style={ styles.subResultado }>0000</Text>
            <Text style={ styles.resultado }>1,500</Text>

            <View style={ styles.fila }>
                <BotonCalc texto='C' color='botonGris' />
                <BotonCalc texto='+/-' color='botonGris' />
                <BotonCalc texto='%' color='botonGris' />
                <BotonCalc texto='/' color='botonNaranja' />
            </View>    

        </View>
    )
}

export default CalculadoraScreen;
