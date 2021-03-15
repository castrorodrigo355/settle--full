import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
// import User from "../models/user";
import { symbolsInitMap } from "../helpers/symbol.helpers";
import fetch from "node-fetch";

export const getSymbols = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const accessKey = process.env.API_ACCESS_KEY;
        const url = baseUrl + "/symbols?access_key=" + accessKey
        const res = await fetch(url)
        const response = await res.json();
        if(res.status === 200 && response.success){
            const result = symbolsInitMap(response.symbols)
            return h.response(result);
        }else{
            return h.response(response);
        }
    } catch (error) {
        return h.response(error).code(500);
    }
};