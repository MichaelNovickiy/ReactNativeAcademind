import {StyleSheet, Text} from 'react-native';
import Colors from '../../constants/colors';

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.text,
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ios: 0, android: 2}),
        borderWidth: 2,
        borderColor: Colors.text,
        padding: 12,
        maxWidth: '80%',
        width: 300
    },
});