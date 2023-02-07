import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = useState('')

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.enteredValue}
                maxLength={2}
                onChangeText={eventCount => setEnteredValue(eventCount)}
                value={enteredValue}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'numeric'}
                // keyboardType="number-pad"
            />
            <TextInput
            />
            <View>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'red',
        marginTop: 50,
        padding: 16
    },
    enteredValue: {
        width: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderStyle: 'solid'
    },
});

export default StartGameScreen;