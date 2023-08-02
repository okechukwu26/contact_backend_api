import { Request } from "express";

export interface IRequest extends Request {
  user?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file?: any;
  role?: string;
}
