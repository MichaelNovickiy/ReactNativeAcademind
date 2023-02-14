import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = useState('')

    const resetHandler = () => setEnteredValue('')

    const numberInputHandler = (enteredText) => setEnteredValue(enteredText);

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetHandler}]
            );
            return;
        }

        console.log('Valid number!');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.enteredValue}
                maxLength={2}
                value={enteredValue}
                onChangeText={numberInputHandler}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#004643',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    enteredValue: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#f9bc60',
        borderBottomWidth: 2,
        color: '#f9bc60',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        paddingVertical: 10,
    },
});

export default StartGameScreen;