import { NextFunction, Request, Response } from "express";

export interface ResponseBank {
  barCode: string;
  date: string;
  amount: string;
}

export interface IGetTicketController {
  handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void>;
}

export interface IGetTicketService {
  execute(code: string): Promise<ResponseBank>;
}
