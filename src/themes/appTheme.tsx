import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        height: 80,
        width: 80,
        marginHorizontal: 5
    },
    botonTexto: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        padding: 10,
        textAlign: 'center'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    fondo: {
        backgroundColor: 'black',
        flex: 1
    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 15
    },
    subResultado: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    }
})

export default styles