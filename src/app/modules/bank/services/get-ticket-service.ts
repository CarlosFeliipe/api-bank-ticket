import config from "../../../../config/load";
import instanceService from "../../../../config/axios/axios-config";
import logger from "../../../../config/logger";
import { ServiceError } from "../../../../config/error";
import { IGetTicketService, ResponseBank } from "../interfaces/ticket";

const configs = config();

const { url } = configs.lambda;

export default class GetTicketService implements IGetTicketService {
  async execute(code: string): Promise<ResponseBank> {
    const axiosInstance = instanceService(url);

    try {
      logger.info("SERVICE-TICKET::: Obtendo valores do boleto");

      const { data } = await axiosInstance.get(`/bank/?code=${code}`);
      return data;
    } catch (error) {
      const errorMessage = "Ocorre ao tentar obter valores do boleto.";
      logger.error(errorMessage);
      throw new ServiceError(errorMessage);
    }
  }
}
