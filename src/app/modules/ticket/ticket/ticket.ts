import { ValidationError } from "../../../../config/error";
import { getTicket } from "./function/ticket-function";

export function ticket(cod: string, blockValidator = false) {
  if (cod.length === 47) return getTicket(cod, blockValidator);
  throw new ValidationError("Código inválido para boleto");
}
