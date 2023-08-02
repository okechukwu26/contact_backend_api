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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const model_1 = require("./model");
const helper_1 = require("../../lib/helper");
const { throwError } = helper_1.ResponseHandler;
class Service {
    static createService(input, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = new model_1.Contacts({
                isFavorite: input.isFavorite,
                phone: input.phone,
                user,
                firstName: input.firstName,
                lastName: input.lastName,
                image: input.image,
            });
            return yield contact.save();
        });
    }
    static read(query, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.Contacts.find(Object.assign(Object.assign({}, query), { active: true, user }));
        });
    }
    static update(input, _id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield model_1.Contacts.findOne({
                _id,
                active: true,
                user,
            });
            if (!contact) {
                helper_1.logger.error("contact does not exists");
                throwError("contact does not exist", 400);
            }
            yield model_1.Contacts.findOneAndUpdate({ _id, user }, input, { new: true });
            return "contact updated";
        });
    }
    static delete(query, _id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield model_1.Contacts.findOne({ _id, user });
            if (!contact) {
                helper_1.logger.error("contact does not exist");
                throwError("contact does not exist", 400);
            }
            query.active = false;
            yield model_1.Contacts.findOneAndUpdate({ _id, user }, query, {
                new: true,
            });
            return "contact deleted";
        });
    }
}
exports.Service = Service;
