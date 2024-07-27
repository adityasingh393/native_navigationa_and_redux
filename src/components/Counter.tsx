import React from "react";
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/slices/counterslice";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import styles from "../styles/counterStyles";

type CounterScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Counter'
>;

const Counter: React.FC = () => {
    const { value } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    const navigation = useNavigation<CounterScreenNavigationProp>();

    return (
        <View style={styles.centeredContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>{value}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="+1"
                        onPress={() => dispatch(increment())}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="-1"
                        onPress={() => dispatch(decrement())}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Go to Multiply"
                        onPress={() => navigation.navigate('Multiply')}
                    />
                </View>
            </View>
        </View>
    );
}

export default Counter;
