import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({userNumber}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)

    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    function nextGuessHandler(direction) {
        if (direction === 'lower') {
            maxBoundary = currentGuess;
            const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        } else {
            minBoundary = currentGuess + 1;
            const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        }
    }

    return (
        <View>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={}>+</PrimaryButton>
                    <PrimaryButton onPress={}>-</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15
    }
});

export default GameScreen;