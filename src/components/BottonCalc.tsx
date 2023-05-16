import React from 'react'
import { Text, View, StyleSheet, BackHandler} from 'react-native'
import styles from '../themes/appTheme'

interface Props {
    texto: string,
    color: string
}

const BotonCalc = ({ texto, color }: Props) => {
    return (
        <View style={ styles.boton }>
            <Text style={ [styles.botonTexto] }>{texto}</Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     gris: {
//         color: '#2D2D2D',
//     },
//     naranja: {
//         color: '#FF9427'
//     }
// })

export default BotonCalc
