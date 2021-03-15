"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbolsInitMap = void 0;
const symbolsInitMap = (data) => {
    let symbolsArray = [];
    for (let element in data) {
        const currency = element;
        const description = data[element];
        symbolsArray = [...symbolsArray, { currency, description }];
    }
    return {
        success: true,
        symbols: symbolsArray
    };
};
exports.symbolsInitMap = symbolsInitMap;
