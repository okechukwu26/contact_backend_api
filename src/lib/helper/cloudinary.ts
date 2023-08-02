import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
import { CLOUDAPIKEY, CLOUDNAME, CLOUDAPISECRET } from "../../config";
// import path from "path";
// import { ResponseHandler } from "./Response";

// const { throwError } = ResponseHandler;

cloudinary.config({
  cloud_name: CLOUDNAME,
  api_key: CLOUDAPIKEY,
  api_secret: CLOUDAPISECRET,
});

export default cloudinary;

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
