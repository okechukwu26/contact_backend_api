"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const mongoose_1 = require("mongoose");
const contactsSchema = new mongoose_1.Schema({
    phone: {
        type: String,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
    },
    lastName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "contactAuth",
    },
}, { timestamps: true });
exports.Contacts = (0, mongoose_1.model)("contact", contactsSchema);
