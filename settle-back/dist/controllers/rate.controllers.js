"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRates = exports.createRate = void 0;
const rate_1 = __importDefault(require("../models/rate"));
const createRate = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let code = 201;
        const rate = new rate_1.default(request.payload);
        const rateSaved = yield rate.save();
        if (!rateSaved) {
            code = 400;
        }
        return h.response(rateSaved).code(code);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.createRate = createRate;
const getRates = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rates = yield rate_1.default.find();
        let code = 200;
        if (rates.length === 0) {
            code = 204;
        }
        return h.response(rates).code(code);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.getRates = getRates;
