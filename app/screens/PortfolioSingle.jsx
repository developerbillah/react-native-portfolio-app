import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const PortfolioSingle = () => {
  return (
    <SafeAreaView>
        <View>
            <View style={styles.logoWrapper}></View>
        </View>
    </SafeAreaView>
  )
}

export default PortfolioSingle;

const styles = StyleSheet.create({
    logoWrapper: {
        width: 48,
        height: 48,
        background: colors.black,
    },
    circleIcon: {
        with: 24,
        height: 24,
        borderRadius: '50%',
        color: colors.lightCream
    }
})