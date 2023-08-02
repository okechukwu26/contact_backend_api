"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const router_1 = __importDefault(require("./media/router"));
const router_2 = __importDefault(require("./auth/router"));
const router_3 = __importDefault(require("./contacts/router"));
module.exports = {
    media: {
        routes: router_1.default,
    },
    auth: {
        routes: router_2.default,
    },
    contact: {
        routes: router_3.default,
    },
};
