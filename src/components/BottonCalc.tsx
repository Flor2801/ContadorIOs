import React from 'react'
import { Text, View, StyleSheet, BackHandler, ImageBackground} from 'react-native'
import styles from '../themes/appTheme'

interface Props {
    texto: string
    color?: string
    ancho?: boolean
}

const BotonCalc = ({ texto, color = '#2D2D2D', ancho }: Props) => {
    return (
        <View style={{
            ...styles.boton,
            backgroundColor: color,
            width: ( ancho === true ) ? 180 : 80
            }}>
            <Text style={{
            ...styles.botonTexto,
            color: ( color === '#9B9B9B' ) ? 'black' : 'white'
            }}>{texto}</Text>
        </View>
    )
}

export default BotonCalc
