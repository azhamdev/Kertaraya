import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Profile(props) {
    return (
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                <View style={{ backgroundColor: 'yellow', width: 100 }}>

                    <Text>
                        Ke Register
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}