import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centeredContainer: {
        // flex: 1,
        top: 200,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    container: {
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default styles;
