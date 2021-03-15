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
exports.getCurrencyLatestByBase = exports.getLatestByBase = exports.getLatest = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const latest_helpers_1 = require("../helpers/latest.helpers");
const getLatest = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const accessKey = process.env.API_ACCESS_KEY;
        const url = baseUrl + "/latest?access_key=" + accessKey;
        const res = yield node_fetch_1.default(url);
        const response = yield res.json();
        if (res.status === 200 && response.success) {
            const result = latest_helpers_1.ratesInitMap(response.rates);
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
exports.getLatest = getLatest;
const getLatestByBase = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const accessKey = process.env.API_ACCESS_KEY;
        let url = `${baseUrl}/latest?access_key=${accessKey}`;
        if (request.params.base) {
            const base = request.params.base;
            url += `&base=${base}`;
        }
        const res = yield node_fetch_1.default(url);
        const response = yield res.json();
        if (res.status === 200 && response.success) {
            const result = latest_helpers_1.ratesInitMap(response.rates);
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
exports.getLatestByBase = getLatestByBase;
const getCurrencyLatestByBase = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const accessKey = process.env.API_ACCESS_KEY;
        let url = `${baseUrl}/latest?access_key=${accessKey}`;
        if (request.params.base) {
            const base = request.params.base;
            url += `&base=${base}`;
        }
        if (request.params.symbols) {
            const symbols = request.params.symbols;
            url += `&symbols=${symbols}`;
        }
        const res = yield node_fetch_1.default(url);
        const response = yield res.json();
        if (res.status === 200 && response.success) {
            const result = latest_helpers_1.ratesInitMap(response.rates);
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
exports.getCurrencyLatestByBase = getCurrencyLatestByBase;
