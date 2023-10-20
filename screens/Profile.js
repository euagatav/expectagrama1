import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Perfil extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    color:'white',
                    borderColor:'purple',
                    font:'corsiva'
                }}>
                <Text>Perfil</Text>
            </View>
        )
    }
}