import React from "react";
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/slices/counterslice";
import styles from "../styles/counterStyles";

const Counter: React.FC = () => {
    const { value } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

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
            </View>
        </View>
    );
}

export default Counter;
