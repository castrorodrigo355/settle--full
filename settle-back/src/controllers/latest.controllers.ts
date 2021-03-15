import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import fetch from "node-fetch";
import { ratesInitMap } from "../helpers/latest.helpers";

export const getLatest = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const accessKey = process.env.API_ACCESS_KEY;
        const url = baseUrl + "/latest?access_key=" + accessKey
        const res = await fetch(url)
        const response = await res.json();
        if(res.status === 200 && response.success){
            const result = ratesInitMap(response.rates);
            return h.response(result);
        }else{
            return h.response(response);
        }
    } catch (error) {
        return h.response(error).code(500);
    }
};

export const getLatestByBase = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const accessKey = process.env.API_ACCESS_KEY;
        let url = `${baseUrl}/latest?access_key=${accessKey}`;
        if(request.params.base){
            const base = request.params.base;
            url += `&base=${base}`
        }
        const res = await fetch(url)
        const response = await res.json();
        if(res.status === 200 && response.success){
            const result = ratesInitMap(response.rates)
            return h.response(result);
        }else{
            return h.response(response);
        }
    } catch (error) {
        return h.response(error).code(500);
    }
};

export const getCurrencyLatestByBase = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const accessKey = process.env.API_ACCESS_KEY;
        let url = `${baseUrl}/latest?access_key=${accessKey}`;
        if(request.params.base){
            const base = request.params.base;
            url += `&base=${base}`
        }
        if(request.params.symbols){
            const symbols = request.params.symbols;
            url += `&symbols=${symbols}`
        }
        const res = await fetch(url)
        const response = await res.json();
        if(res.status === 200 && response.success){
            const result = ratesInitMap(response.rates)
            return h.response(result);
        }else{
            return h.response(response);
        }
    } catch (error) {
        return h.response(error).code(500);
    }
};

