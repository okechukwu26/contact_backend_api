"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helper_1 = require("../../lib/helper");
const controller_1 = require("./controller");
const multer_1 = __importDefault(require("../../lib/helper/multer"));
const { ErrorHandler } = helper_1.ResponseHandler;
const router = (0, express_1.Router)();
router.post("/upload", multer_1.default.single("image"), ErrorHandler(controller_1.MediaController.upload));
exports.default = router;
