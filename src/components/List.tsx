import { FlatList } from 'react-native';
import React, { FC, useCallback, useRef } from 'react';

import { Fact, Facts as FactsType } from '../types';
import { Card } from '../components/Card';

interface ListProps {
    cards: FactsType;
}

interface ItemProps {
    item: Fact;
}

export const List: FC<ListProps> = ({ cards }) => {
    const list = useRef<FlatList>(null);

    const renderItem: FC<ItemProps> = ({ item }) => {
        return <Card text={item.text} />;
    };

    const handleContentSizeChange = useCallback(() => {
        if (list.current) {
            list.current.scrollToEnd();
        }
    }, []);

    return (
        <FlatList
            ref={list}
            onContentSizeChange={handleContentSizeChange}
            data={cards}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};
