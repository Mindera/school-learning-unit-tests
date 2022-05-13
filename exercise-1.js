import { difference } from "lodash";

export const buildHello = (name) => `Hello ${name}`;

export const sumTwo = (a, b) => a + b;

export const orderMe = (array) => array.sort((a, b) => b - a);

export const sumDiff = (firstArray, secondArray) =>
    difference(firstArray, secondArray)
        .reduce((acc, el) => acc + el, 0);



