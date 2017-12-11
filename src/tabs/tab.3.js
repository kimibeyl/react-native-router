import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Tab3 extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text>Ring..., ring.... Hello?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'yellow'
    }
});