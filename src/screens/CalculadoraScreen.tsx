import React , { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import styles from '../themes/appTheme'
import BotonCalc from '../components/BottonCalc'


const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = ( numeroTexto: string ) => {
        // No aceptar el doble punto
        if( numero.includes('.') && numeroTexto === '.' ) return

        if( numero.startsWith('0') || numero.startsWith('-0')) {

            // Punto decimal
            if( numeroTexto === '.' ) {
                setNumero( numero + numeroTexto )
                // Evaluar si es otro cero, y hay un punto
            } else if ( numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
                //Evaluar si es un numero distinto a 0 y no hay punto
            } else if ( numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
                // Evitar el 0000.0
            } else if ( numeroTexto === '0' && !numero.includes('.')) {
                setNumero( numero )
            } else {
                setNumero( numero + numeroTexto )
            }

        } else {
            setNumero( numero + numeroTexto )
        }
    }

    const borrarNumero = () => {

        // Si el numero actual tiene solo 1 caracter, entonces resetear a 0
        if( numero.length === 1 ) {
            setNumero('0')
        }
        // Si el numero tiene mas de 1 caracter, entonces borrar el ultimo
        if( numero.length > 1 ) {
            setNumero(numero.slice(0, -1))
        }

    }

    const positivoNegativo =  () => {
        if ( numero.includes('-') || numero === '0' ) {
            setNumero( numero.replace('-', '') )
        } else {
            setNumero( '-' + numero )
        }
    }


    return (
        <View style={ styles.calculadoraContainer }>
            <Text
                style={ styles.subResultado }
            >{numeroAnterior}
            </Text>
            <Text
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >{ numero }
            </Text>

            {/* Fila de botones */}
            <View style={ styles.fila }>
                <BotonCalc texto='C' color='#9B9B9B' accion={limpiar}/>
                <BotonCalc texto='+/-' color='#9B9B9B' accion={positivoNegativo} />
                <BotonCalc texto='del' color='#9B9B9B' accion={borrarNumero} />
                <BotonCalc texto='/' color='#FF9427' accion={armarNumero} />
            </View>

             {/* Fila de botones */}
            <View style={ styles.fila }>
                <BotonCalc texto='7' accion={armarNumero} />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero} />
                <BotonCalc texto='X' color='#FF9427' accion={limpiar} />
            </View>

             {/* Fila de botones */}
             <View style={ styles.fila }>
                <BotonCalc texto='4' accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero} />
                <BotonCalc texto='-' color='#FF9427' accion={limpiar} />
            </View>

             {/* Fila de botones */}
             <View style={ styles.fila }>
                <BotonCalc texto='1' accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero} />
                <BotonCalc texto='+' color='#FF9427' accion={limpiar} />
            </View>

             {/* Fila de botones */}
             <View style={ styles.fila }>
                <BotonCalc texto='0' ancho={true} accion={armarNumero} />
                <BotonCalc texto='.' accion={armarNumero} />
                <BotonCalc texto='=' color='#FF9427' accion={limpiar} />
            </View>

        </View>
    )
}

export default CalculadoraScreen;
