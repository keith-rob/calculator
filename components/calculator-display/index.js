import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CalculatorDisplay = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.Numbers.length == 0 ? 0 : props.Numbers}</Text>
        </View>
    );

};

// because the styles of text and view componenets are complex, we are creating a styles js for them

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    text: {
        fontSize: 36,
        color: '#FFFFFF',
    },
})



export default CalculatorDisplay;


