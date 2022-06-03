import { ValidationError } from "../../../../config/error";
import { getConvenio } from "./function/convert";

export async function convenio(code: string, validarBlocos = false) {
  if (code.length === 48) return getConvenio(code, validarBlocos);
  throw new ValidationError("Código inválido para convenio");
}
