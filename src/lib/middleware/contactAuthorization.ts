/* eslint-disable no-console */
import { Response, NextFunction } from "express";
import { ContactAuth } from "../../components/auth/model";
import { ResponseHandler, logger } from "../helper";
import { IRequest } from "../../interface";
import { Jwt } from "../helper";
const { badRequest, throwError } = ResponseHandler;

export class ContactAuthMiddleware {
  static Authenticate =
    () => async (req: IRequest, res: Response, next: NextFunction) => {
      try {
        const token = req.headers["authorization"];
        if (!token) {
          logger.error("Authentication failed, no token was provided");
          throwError("Authentication failed, no token was provided", 401);
        }

        const result = await Jwt.verify(token as string);

        if (typeof result === "string") {
          throwError("invalid typeof for token", 400);
        } else {
          const decode = await ContactAuth.findOne({
            active: true,
            _id: result._id,
          });
          const currentDate = new Date().getTime();

          const TokenLife = result.exp * 1000;
          if (currentDate > TokenLife) {
            logger.error("Token expired");
            throwError("token expired", 403);
          }

          req.user = decode._id;
          next();
        }
      } catch ({ message, code }) {
        return badRequest(
          res,
          code || 400,
          message || "authentication failed, invalid token",
          next,
        );
      }
    };
}
