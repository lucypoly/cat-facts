import React, { FC } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';

import { Card } from 'Card/Card';
import { Fact } from 'types';

const DATA: Fact[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        text: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        text: 'Third Item',
    },
];

const App: FC = () => {
    const renderItem: FC<{ item: Fact }> = ({ item }) => (
        <Card title={item.text} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});

export default App;
