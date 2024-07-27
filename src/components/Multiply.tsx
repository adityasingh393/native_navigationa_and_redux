import React, { useState } from "react";
import { Text, View, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { incrementByAmount, reset } from "../redux/slices/multiplySlice";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import styles from "../styles/multiplyStyles";

type MultiplyScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Multiply'
>;

const Multiply: React.FC = () => {
    const { value } = useSelector((state: RootState) => state.multiply);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState<number>(1);
    const navigation = useNavigation<MultiplyScreenNavigationProp>();

    return (
        <View style={styles.centeredContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>{value}</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(text) => setAmount(Number(text))}
                    value={amount.toString()}
                    placeholder="Enter a number"
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Multiply"
                        onPress={() => dispatch(incrementByAmount(amount))}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Reset"
                        onPress={() => dispatch(reset())}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Go to Counter"
                        onPress={() => navigation.navigate('Counter')}
                    />
                </View>
            </View>
        </View>
    );
}

export default Multiply;
