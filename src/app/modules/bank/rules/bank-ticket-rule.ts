import dayjs from "dayjs";
import { ServiceError } from "../../../../config/error";
import logger from "../../../../config/logger";
import { IGetTicketRule, IGetTicketService } from "../interfaces/ticket";

export default class GetTicketRule implements IGetTicketRule {
  private getTicketService: IGetTicketService;

  constructor(getTicketService: IGetTicketService) {
    this.getTicketService = getTicketService;
  }

  execute = async (code: string): Promise<any> => {
    logger.info("[GetTicketRule]::: regra de negócio do boleto");

    try {
      const result = await this.getTicketService.execute(code);

      const { date } = result;

      const response = {
        ...result,
        date: dayjs(date).format("DD/MM/YYYY") || "-",
      };
      return response;
    } catch (error: any) {
      const errorMessage = "[GetTicketRule]::: - Erro na regra de negócio";
      logger.error(errorMessage);
      throw new ServiceError(errorMessage);
    }
  };
}
