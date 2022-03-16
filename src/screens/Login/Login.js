import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Login(props) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 700 }}>
            <Text> ------ login -----</Text>
            <View style={{ marginBottom: 30 }}>

            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
                <View style={{ backgroundColor: 'yellow', width: 150, height: 30, alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
                    <Text>
                        Ke Home
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}