import { Router } from "express";
import { ResponseHandler } from "../../lib/helper";
import { MediaController } from "./controller";
import upload from "../../lib/helper/multer";

const { ErrorHandler } = ResponseHandler;
const router = Router();
router.post(
  "/upload",
  upload.single("image"),
  ErrorHandler(MediaController.upload),
);

export default router;
