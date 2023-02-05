import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const GoalItem = ({title, id, removeGoalHandler}) => {

    const onRemoveItem = (id) => {
        removeGoalHandler(id)
    }

    return (
        <View style={styles.goalContainer}>
            <Pressable
                onPress={() => onRemoveItem(id)}
                android_ripple={{color: 'rgb(210, 230, 255)'}}
                style={({pressed}) => [{backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'rgba(183,53,197,0.07)'}]}>
                <Text style={styles.goal}>{title}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalContainer: {
        marginVertical: 4,
        backgroundColor: '#a844f1',
        borderRadius: 6
    },
    goal: {
        padding: 8,
        fontSize: 18,
        color: '#ffffff',
    }
})

export default GoalItem;