import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 28 : 36,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
        fontSize: 36,
    },
});