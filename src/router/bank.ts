import { Router } from "express";
import GetTicketController from "../app/modules/bank/controllers/bank-ticket-controller";
import GetTicketRule from "../app/modules/bank/rules/bank-ticket-rule";
import GetTicketService from "../app/modules/bank/services/get-ticket-service";

const bankRouter = Router();

const instanceService = new GetTicketService();
const instance = new GetTicketController(new GetTicketRule(instanceService));

bankRouter.get("/boleto/:code", instance.handle);

export default bankRouter;
