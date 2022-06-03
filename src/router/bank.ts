import { Router } from "express";
import GetTicketController from "../app/modules/bank/controllers/bank-ticket-controller";
import GetTicketService from "../app/modules/bank/services/get-ticket-service";

const bankRouter = Router();

const instance = new GetTicketController(new GetTicketService());

bankRouter.get("/boleto/:code", instance.handle);

export default bankRouter;
