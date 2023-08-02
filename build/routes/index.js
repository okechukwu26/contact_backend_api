"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helper_1 = require("../lib/helper");
const components_1 = __importDefault(require("../components"));
const router = (0, express_1.Router)();
const { success } = helper_1.ResponseHandler;
router.get("/", (req, res) => success(res, req, 200));
router.use("/api/media", components_1.default.media.routes);
router.use("/api/auth", components_1.default.auth.routes);
router.use("/api/contact", components_1.default.contact.routes);
exports.default = router;
