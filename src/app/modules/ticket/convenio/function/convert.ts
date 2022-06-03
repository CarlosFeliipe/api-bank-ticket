import { module10, module11 } from "../modules/module";

export async function convertToTicket(code: string) {
  let barCode = "";
  for (let index = 0; index < 4; index++) {
    const start = 11 * index + index;
    const end = 11 * (index + 1) + index;
    barCode += code.substring(start, end);
  }
  return barCode;
}

export const getValue = async (line: string): Promise<string> => {
  const value = parseFloat(line.substring(16, 5)).toString();
  if (value.length === 2) {
    return value + "0,";
  } else if (value.length === 1) {
    return value + "0,0";
  } else {
    const valueFinal =
      value.substring(1, value.length - 2) +
      "," +
      value.substring(value.length - 2, value.length);
    return valueFinal;
  }
};

export async function getConvenio(code: string, validarBlocos = false) {
  if (!/^[0-9]{48}$/.test(code) || Number(code[0]) !== 8) return false;
  const currencyCode = Number(code[2]);
  let module: (block: string) => number;
  if (currencyCode === 6 || currencyCode === 7) module = module10;
  else if (currencyCode === 8 || currencyCode === 9) module = module11;
  else return false;
  const blocos = Array.from({ length: 4 }, (v, index) => {
    const start = 11 * index + index;
    const end = 11 * (index + 1) + index;
    return {
      num: code.substring(start, end),
      DV: code.substring(end, end + 1),
    };
  });
  const ticketIsValid = blocos.every((e) => module(e.num) === Number(e.DV));
  const lineToBarCode = await convertToTicket(code);
  const amount = await getValue(code);
  return {
    barCode: lineToBarCode,
    amount,
    type: "Boleto Convenio",
    ticketIsValid,
  };
}
