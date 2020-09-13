import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getRandomColor } from '../utils';

interface CardProps {
    text: string;
}

export const Card: FC<CardProps> = ({ text }) => {
    const [color, setColor] = useState('');
    useEffect(() => {
        setColor(getRandomColor());
    }, []);

    return (
        <View style={{ ...styles.item, backgroundColor: color }}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    text: {
        fontSize: 32,
    },
});
