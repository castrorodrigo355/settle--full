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
exports.deleteUser = exports.getUser = exports.getUsers = exports.createUser = exports.getDataSettle = void 0;
const user_1 = __importDefault(require("../models/user"));
const getDataSettle = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default(request.payload);
        const userSaved = yield user.save();
        return h.response(userSaved);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.getDataSettle = getDataSettle;
const createUser = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default(request.payload);
        const userSaved = yield user.save();
        return h.response(userSaved);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.createUser = createUser;
const getUsers = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        return h.response(users);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.getUsers = getUsers;
const getUser = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userfound = yield user_1.default.findById(request.params.id);
        if (userfound) {
            return h.response(userfound);
        }
        return h.response().code(404);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.getUser = getUser;
// export const updateUser = async (
//   request: Request,
//   h: ResponseToolkit
// ) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       request.params.id,
//       request.payload,
//       { new: true }
//     );
//     if (updatedUser) {
//       return h.response(updatedUser);
//     }
//     return h.response().code(404);
//   } catch (error) {
//     return h.response(error).code(500);
//   }
// };
const deleteUser = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield user_1.default.findByIdAndDelete(request.params.id);
        if (deletedUser) {
            return h.response(deletedUser);
        }
        return h.response().code(404);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.deleteUser = deleteUser;
