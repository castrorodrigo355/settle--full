"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ratesSchema = new mongoose_1.Schema({
    pair: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    fee: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    applied: {
        type: Number,
        required: true,
    }
});
exports.default = mongoose_1.model("Rate", ratesSchema);
