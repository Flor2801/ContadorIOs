import React , { useState, useRef } from 'react'
import { Text, View } from 'react-native'
import styles from '../themes/appTheme'
import BotonCalc from '../components/BottonCalc'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

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

        // Chequea si es un numero negativo o positivo
        let negativo = ''
        let numeroTemp = numero
        if (numero.includes('-')) {
            negativo = '-'
            numeroTemp = numero.substring(1)
        }
        
        // Elimina el ultimo caracter y deja el primer numero como negativo si lo era
        if ( numeroTemp.length > 1 ) {
            setNumero( negativo + numeroTemp.slice(0,-1))
        } else {
            setNumero('0')
        }

    }

    const cambiarNumeroPorAnterior =  () => {
        if( numero.endsWith('.')) {
            setNumeroAnterior( numero.slice(0,-1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const positivoNegativo =  () => {
        if ( numero.includes('-') ) {
            setNumero( numero.replace('-', '') )
        } else {
            setNumero( '-' + numero )
        }
    }

    const sumar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.sumar

    }

    const restar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.restar

    }

    const dividir = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.dividir

    }

    const multiplicar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const calcular = () => {
        const num1 = Number( numero )
        const num2 = Number( numeroAnterior )

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero( `${num1 + num2}`)
                setNumeroAnterior('0')
                break;
            case Operadores.restar:
                setNumero( `${num2 - num1}`)
                setNumeroAnterior('0')
                break;
            case Operadores.dividir:
                setNumero( `${num2 / num1}`)
                setNumeroAnterior('0')
                break;
            case Operadores.multiplicar:
                setNumero( `${num1 * num2}`)
                setNumeroAnterior('0')
                break;

            default:
                break;
        }
    }

    return (
        <View style={ styles.calculadoraContainer }>
            {
                ( numeroAnterior !== '0') && <Text style={ styles.subResultado }> { numeroAnterior } </Text>
            }
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
                <BotonCalc texto='/' color='#FF9427' accion={dividir} />
            </View>

             {/* Fila de botones */}
            <View style={ styles.fila }>
                <BotonCalc texto='7' accion={armarNumero} />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero} />
                <BotonCalc texto='X' color='#FF9427' accion={multiplicar} />
            </View>

             {/* Fila de botones */}
             <View style={ styles.fila }>
                <BotonCalc texto='4' accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero} />
                <BotonCalc texto='-' color='#FF9427' accion={restar} />
            </View>

             {/* Fila de botones */}
             <View style={ styles.fila }>
                <BotonCalc texto='1' accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero} />
                <BotonCalc texto='+' color='#FF9427' accion={sumar} />
            </View>

             {/* Fila de botones */}
             <View style={ styles.fila }>
                <BotonCalc texto='0' ancho={true} accion={armarNumero} />
                <BotonCalc texto='.' accion={armarNumero} />
                <BotonCalc texto='=' color='#FF9427' accion={calcular} />
            </View>

        </View>
    )
}

export default CalculadoraScreen;
