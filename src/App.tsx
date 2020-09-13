import { registerRootComponent } from 'expo';
import React, { FC, useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
} from 'react-native';

import { Facts } from './components/Facts';

const App: FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://cat-fact.herokuapp.com/facts').then((r) =>
            r.json().then((data) => {
                setData(data.all);
                setLoading(false);
            }),
        );

        return () => setData([]);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#177C99" />
            ) : (
                <Facts data={data} />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
});

registerRootComponent(App);
