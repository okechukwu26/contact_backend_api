"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
// import { CloudinaryStorage } from "multer-storage-cloudinary";
const config_1 = require("../../config");
// import path from "path";
// import { ResponseHandler } from "./Response";
// const { throwError } = ResponseHandler;
cloudinary_1.v2.config({
    cloud_name: config_1.CLOUDNAME,
    api_key: config_1.CLOUDAPIKEY,
    api_secret: config_1.CLOUDAPISECRET,
});
exports.default = cloudinary_1.v2;
// export class CloudinaryService {
//   static uploadItem(folder: string) {
//     return new CloudinaryStorage({
//       cloudinary: cloudinary,
//       params: async (req, file) => {
//         const ext = path.extname(file.originalname);
//         if (
//           ext !== ".jpg" &&
//           ext !== ".jpeg" &&
//           ext !== ".png" &&
//           ext !== ".PNG" &&
//           ext !== ".gif"
//         ) {
//           throwError("invalid picture format", 400);
//         }
//         return {
//           folder: folder,
//           public_id: `${file.originalname}`,
//         };
//       },
//     });
//   }
// }
// export default CloudinaryService;
