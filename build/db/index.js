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
exports.DATABASE = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const helper_1 = require("../lib/helper");
const DATABASE = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connect = yield mongoose_1.default.connect(`mongodb+srv://priceblings:Okechukwu29@cluster0.d8bojru.mongodb.net/contact`);
        helper_1.logger.info(`database has been connected successfully to ${JSON.stringify(connect.connection.host)}`);
    }
    catch (error) {
        helper_1.logger.error(`Mongodb connection error ${JSON.stringify(error)}`);
        process.exit(1);
    }
});
exports.DATABASE = DATABASE;
