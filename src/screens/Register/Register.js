import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Register(props) {
    return (
        <View>
            <Text>Register</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <View style={{ backgroundColor: 'yellow', width: 100 }}>
                    <Text>
                        Ke Login
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}