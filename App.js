import {Button, FlatList, StatusBar, StyleSheet, View} from 'react-native';
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
        <>
            <StatusBar style="light"/>
            <View style={styles.container}>
                <Button title={'I want to add Goal!'}
                        onPress={() => setShowGoalInput(true)}
                        color={'#eebbc3'}
                />
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
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 50,
        marginBottom: 120,
    },
    goalList: {
        marginVertical: 8,
    },
});

export default App;