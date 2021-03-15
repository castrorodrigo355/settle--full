"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetUser = void 0;
const joi_1 = __importDefault(require("joi"));
exports.validateGetUser = {
    validate: {
        headers: joi_1.default.object({
            name: joi_1.default.string().required()
        }).options({ allowUnknown: true })
    }
};
