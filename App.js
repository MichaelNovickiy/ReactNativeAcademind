import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [listGoals, setListGoals] = useState([]);

    const onChangeInputValue = (value) => setInputValue(value)
    const addGoalHandler = () => {
        setListGoals(prevState => [...prevState, inputValue])
        setInputValue('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeInputValue}
                    placeholder={'Write your goal!'}
                    value={inputValue}
                />
                <Button title={'Add goal!'} onPress={addGoalHandler}/>
            </View>
            <ScrollView style={styles.goalList}>
                {listGoals.map((goal) => {
                    return <View key={goal} style={styles.goalContainer}>
                        <Text style={styles.goal}>{goal}</Text>
                    </View>
                })}
            </ScrollView>
        </View>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
    },
    inputContainer: {
        marginTop: 50,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        padding: 8,
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    goalList: {
        marginVertical: 8,
    },
    goalContainer: {
        marginVertical: 4,
        backgroundColor: '#a844f1',
        borderRadius: 6
    },
    goal: {
        padding: 8,
        fontSize: 18,
        color: '#fff',
    }
});
