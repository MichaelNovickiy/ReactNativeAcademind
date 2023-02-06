import React from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

const GoalInput = ({onChangeInputValue, addGoalHandler, value, visible, onShowGoalInput}) => {

    const onChangeTextHandler = (value) => onChangeInputValue(value)

    const onAddGoalHandler = () => {
        if (value.trim() !== '') {
            addGoalHandler()
        }
    }

    const onClose = () => onShowGoalInput(false)

    return (<Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextHandler}
                    placeholder={'Write your goal!'}
                    value={value}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={'Add goal!'}
                                onPress={onAddGoalHandler}
                                color={'#eebbc3'}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title={'Close'}
                                onPress={onClose}
                                color={'#eebbc3'}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        paddingBottom: 20,
        flex: 1,
        backgroundColor: '#d4d8f0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    input: {
        padding: 8,
        width: '70%',
        color: '#232946',
        borderColor: '#fffffe',
        backgroundColor: '#fffffe',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    buttonContainer: {
        marginVertical: 16,
        flexDirection: 'row',
    },
    button: {
        marginVertical: 8,
        marginHorizontal: 8,
        width: 100,
    },
})

export default GoalInput;