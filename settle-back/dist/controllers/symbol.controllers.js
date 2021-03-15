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
exports.getSymbols = void 0;
// import User from "../models/user";
const symbol_helpers_1 = require("../helpers/symbol.helpers");
const node_fetch_1 = __importDefault(require("node-fetch"));
const getSymbols = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const accessKey = process.env.API_ACCESS_KEY;
        const url = baseUrl + "/symbols?access_key=" + accessKey;
        const res = yield node_fetch_1.default(url);
        const response = yield res.json();
        if (res.status === 200 && response.success) {
            const result = symbol_helpers_1.symbolsInitMap(response.symbols);
            return h.response(result);
        }
        else {
            return h.response(response);
        }
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.getSymbols = getSymbols;
