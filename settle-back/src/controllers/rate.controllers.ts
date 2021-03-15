import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import Rate from "../models/rate";

export const createRate = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    let code: number = 201;
    const rate = new Rate(request.payload);
    const rateSaved = await rate.save();
    if(!rateSaved){
        code = 400;
    }
    return h.response(rateSaved).code(code);
  } catch (error) {
    return h.response(error).code(500);
  }
};

export const getRates = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const rates = await Rate.find();
    let code: number = 200;
    if(rates.length === 0){
        code = 204;
    }
    return h.response(rates).code(code);
  } catch (error) {
    return h.response(error).code(500);
  }
};
