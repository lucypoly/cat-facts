import { colors } from './const';

export const getRandomColor = (): string =>
    colors[Math.floor(Math.random() * colors.length)];
