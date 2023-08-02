import { Router, Request, Response } from "express";
import { ResponseHandler } from "../lib/helper";
import components from "../components";

const router = Router();
const { success } = ResponseHandler;

router.get("/", (req: Request, res: Response) => success(res, req, 200));

router.use("/api/media", components.media.routes);
router.use("/api/auth", components.auth.routes);
router.use("/api/contact", components.contact.routes);

export default router;
