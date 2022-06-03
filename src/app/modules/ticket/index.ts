import { ValidationError } from "../../../config/error";
import { convenio } from "./convenio/convenio-bank";
import { ticket } from "./ticket/ticket";

export async function ticketOrConvenio(code: string) {
  if (code.length === 47) {
    return ticket(code);
  } else if (code.length === 48) {
    return await convenio(code);
  }
  throw new ValidationError("Código inválido para boleto e convenio");
}
