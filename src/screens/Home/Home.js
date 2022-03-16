import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Home(props) {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Explore')}>
                <View style={{ backgroundColor: 'yellow', width: 100 }}>

                    <Text>
                        Ke Explore
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}