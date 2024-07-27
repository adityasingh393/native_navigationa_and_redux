import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centeredContainer: {
        // flex: 4,
        top: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    container: {
        // flex:1,
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 5,
        width: '80%',
        textAlign: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default styles;
