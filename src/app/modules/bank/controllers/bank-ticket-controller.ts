import { NextFunction, Request, Response } from "express";
import { ServiceError } from "../../../../config/error";
import logger from "../../../../config/logger";
import { StatusCodes } from "../../../../enums/status-code";
import { IGetTicketController, IGetTicketRule } from "../interfaces/ticket";

export default class GetTicketController implements IGetTicketController {
  private getTicketRule: IGetTicketRule;

  constructor(getTicketRule: IGetTicketRule) {
    this.getTicketRule = getTicketRule;
  }

  handle = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    logger.info(
      "[GetTicketController]::: tentando buscar informações do boleto"
    );

    try {
      const { code } = request.params;

      const resp = await this.getTicketRule.execute(code);
      response.status(StatusCodes.OK).json(resp);

      logger.info("[GetTicket] informações do boleto retornadas com sucesso.");

      return next();
    } catch (error: any) {
      if (error.isAxiosError) {
        const errorMessage =
          "Ocorreu um erro ao tentar buscar informações do boleto.";
        return next(new ServiceError(errorMessage));
      }
      next(error);
    }
  };
}
