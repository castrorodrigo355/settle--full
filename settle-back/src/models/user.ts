import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  age: number;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true
    },
    age: {
      type: Number,
      required: true,
    },
    
  }
);

export default model<IUser>("User", userSchema);
