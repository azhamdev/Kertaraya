import React from "react";
import { View, Text } from 'react-native'

const HitungLuasKamar = (nilai) => {
    return (
        <View>
            <Text style={{ color: 'black', fontSize: 28 }} >
                {nilai.panjang} * {nilai.lebar} = {nilai.panjang * nilai.lebar}
            </Text>
        </View >
    )
};

export default HitungLuasKamar;

