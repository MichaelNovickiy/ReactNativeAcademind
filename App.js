import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [showGoalInput, setShowGoalInput] = useState(false);
    const [listGoals, setListGoals] = useState([]);

    const onShowGoalInput = (value) => setShowGoalInput(value)
    const onChangeInputValue = (value) => setInputValue(value)
    const addGoalHandler = () => {
        setListGoals(prevState => [...prevState, {title: inputValue, id: Math.random().toString()}])
        setInputValue('')
    }
    const removeGoalHandler = (id) => {
        setListGoals(prevState => prevState.filter(obj => obj.id !== id))
    }

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title={'I want to add Goal!'}
                        onPress={() => setShowGoalInput(true)}
                />
            </View>
            <GoalInput onChangeInputValue={onChangeInputValue}
                       addGoalHandler={addGoalHandler}
                       value={inputValue}
                       visible={showGoalInput}
                       onShowGoalInput={onShowGoalInput}
            />
            <FlatList
                style={styles.goalList}
                data={listGoals}
                alwaysBounceVertical={false}
                renderItem={({item}) => <GoalItem title={item.title} id={item.id}
                                                  removeGoalHandler={removeGoalHandler}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
    },
    container: {
        marginHorizontal: 16,
        marginBottom: 120
    },
    goalList: {
        marginVertical: 8,
    },
});

export default App;