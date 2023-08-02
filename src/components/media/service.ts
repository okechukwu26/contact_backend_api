import cloudinary from "../../lib/helper/cloudinary";
import { ResponseHandler } from "../../lib/helper";

const { throwError } = ResponseHandler;

export class Service {
  static async createimage(file: string) {
    try {
      const image = await cloudinary.uploader.upload(file);

      return image.secure_url;
    } catch (error) {
      throwError(error, 400);
    }
  }
}
