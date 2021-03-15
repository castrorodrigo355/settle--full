"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratesInitMap = void 0;
const ratesInitMap = (data) => {
    let ratesArray = [];
    for (let element in data) {
        const currency = element;
        const value = data[element];
        ratesArray = [...ratesArray, { currency, value }];
    }
    return {
        success: true,
        rates: ratesArray
    };
};
exports.ratesInitMap = ratesInitMap;
