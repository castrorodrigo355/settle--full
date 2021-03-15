import { Schema, model, Document } from "mongoose";

export interface IRate extends Document {
  pair: string;
  rate: number;
  fee: number;
  amount: number;
  applied: number;
}

const ratesSchema = new Schema(
  {
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
  }
);

export default model<IRate>("Rate", ratesSchema);
