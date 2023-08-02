import { IRequest } from "../../interface";
import { Response } from "express";
import { ResponseHandler } from "../../lib/helper";
import { Service } from "./service";

const { success } = ResponseHandler;

export class MediaController {
  static async upload(req: IRequest, res: Response) {
    const data = await Service.createimage(req.file.path);
    return success(res, req, 200, data);
  }
}
