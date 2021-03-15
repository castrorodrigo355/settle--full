"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRate = void 0;
const joi_1 = __importDefault(require("joi"));
exports.validateRate = {
    validate: {
        payload: joi_1.default.object({
            pair: joi_1.default.string().required(),
            rate: joi_1.default.number().required(),
            fee: joi_1.default.number().required(),
            amount: joi_1.default.number().required(),
            applied: joi_1.default.number().required()
        }).options({ allowUnknown: true })
    }
};
