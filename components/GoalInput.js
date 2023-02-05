import React from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';

const GoalInput = ({onChangeInputValue, addGoalHandler, value, visible, onShowGoalInput}) => {

    const onChangeTextHandler = (value) => onChangeInputValue(value)
    const onAddGoalHandler = () => addGoalHandler()
    const onClose = () => onShowGoalInput(false)

    return (<Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextHandler}
                    placeholder={'Write your goal!'}
                    value={value}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title={'Add goal!'} onPress={onAddGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={'Close'} onPress={onClose}/>
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
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 8,
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    buttons: {
        marginVertical: 16
    },
    button: {
        marginVertical: 8
    },
})

export default GoalInput;