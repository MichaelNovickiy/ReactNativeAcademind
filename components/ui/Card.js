import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
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
})

export default Card;