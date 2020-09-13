import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button } from 'react-native';

import { List } from '../components/List';
import { Facts as FactsType, Fact } from '../types';

const CARDS_TO_SHOW = 3;
let cardsArr: FactsType = [];

interface FactsProps {
    data: FactsType;
}

export const Facts: FC<FactsProps> = ({ data }) => {
    const [cards, setCards] = useState<Fact[]>([]);
    const [next, setNext] = useState(3);

    const addCards = useCallback(
        (start: number, end: number) => {
            const slicedCards = data.slice(start, end);
            cardsArr = [...cardsArr, ...slicedCards];
            setCards([...cardsArr]);
        },
        [data],
    );

    const onPressLearnMore = useCallback(() => {
        addCards(next, next + CARDS_TO_SHOW);
        setNext(next + CARDS_TO_SHOW);
    }, [addCards, next]);

    useEffect(() => {
        addCards(0, CARDS_TO_SHOW);
    }, [addCards]);

    return (
        <>
            <List cards={cards} />
            {cards.length !== data.length && (
                <Button
                    onPress={onPressLearnMore}
                    title="Load More"
                    color="#177C99"
                    accessibilityLabel="Load more cat facts"
                />
            )}
        </>
    );
};
