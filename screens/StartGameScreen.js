import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({onPickNumber}) => {
    const [enteredValue, setEnteredValue] = useState('')

    const {width, height} = useWindowDimensions()

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

        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 500 ? 30 : 100

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput
                            style={styles.enteredValue}
                            maxLength={2}
                            value={enteredValue}
                            onChangeText={numberInputHandler}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="number-pad"
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.button}>
                                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.button}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    enteredValue: {
        fontFamily: 'open-sans-bold',
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#f9bc60',
        borderBottomWidth: 2,
        color: '#f9bc60',
        marginVertical: 8,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        paddingVertical: 10,
    },
});

export default StartGameScreen;