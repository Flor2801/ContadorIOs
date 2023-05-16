import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
        textAlign: 'right'
    },
    subResultado: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    }
})

export default styles