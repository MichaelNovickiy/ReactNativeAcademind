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
                style={({pressed}) => [{backgroundColor: pressed ? '#eebbc3' : '#b8c1ec'}, { borderRadius: 3}]}
            >
                <Text style={styles.goalText}>{title}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalContainer: {
        marginVertical: 4,

    },
    goalText: {
        padding: 8,
        fontSize: 18,
        color: '#121629',
    }
})

export default GoalItem;