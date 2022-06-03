import { NextFunction, Request, Response } from "express";
import { ServiceError } from "../../../../config/error";
import logger from "../../../../config/logger";
import { StatusCodes } from "../../../../enums/status-code";
import { ticketOrConvenio } from "../../ticket";
import { IGetTicketController, IGetTicketService } from "../interfaces/ticket";

export default class GetTicketController implements IGetTicketController {
  private getTicketService: IGetTicketService;

  constructor(getTicketService: IGetTicketService) {
    this.getTicketService = getTicketService;
  }

  handle = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    logger.info("TICKET-CONTROLLER::: tentando buscar informações do boleto");

    try {
      const { code } = request.params;

      const resp = await ticketOrConvenio(code);
      response.status(StatusCodes.OK).json(resp);
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
