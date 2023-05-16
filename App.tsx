/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { SafeAreaView, StatusBar } from 'react-native'
import styles from './src/themes/appTheme'

const App = () => {
    return (
      <SafeAreaView style={ styles.fondo }>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'black'}/>
        <CalculadoraScreen />
      </SafeAreaView>

    )
  }

export default App;
