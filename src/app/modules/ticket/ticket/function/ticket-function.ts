import dayjs from "dayjs";
import { module10 } from "../modules/module";

export const ticketToBarCode = async (code: string): Promise<string> => {
  let bankCode = "";
  bankCode += code.substring(0, 3);
  bankCode += code.substring(3, 4);
  bankCode += code.substring(32, 33);
  bankCode += code.substring(33, 37);
  bankCode += code.substring(37, 47);
  bankCode += code.substring(4, 9);
  bankCode += code.substring(10, 20);
  bankCode += code.substring(21, 31);
  return bankCode;
};

export const ticketToValue = async (code: string): Promise<string> => {
  const value = await parseFloat(
    code.substring(code.length - 10, code.length)
  ).toString();
  if (value.length === 2) {
    return value + "0,";
  } else if (value.length === 1) {
    return value + "0,0";
  } else {
    const valueFinal =
      value.substring(0, value.length - 2) +
      "," +
      value.substring(value.length - 2, value.length);
    return valueFinal;
  }
};

export const ticketToDate = async (code: string) => {
  const days = parseInt(code.slice(33, 37));
  const date = new Date(1997, 10 - 1, 7);
  date.setDate(date.getDate() + days);
  return dayjs(date).format("DD/MM/YYYY");
};

export async function getTicket(code: string, blockValidator = false) {
  const block = [
    {
      num: code.substring(0, 9),
      DV: code.substring(9, 10),
    },
    {
      num: code.substring(10, 20),
      DV: code.substring(20, 21),
    },
    {
      num: code.substring(21, 31),
      DV: code.substring(31, 32),
    },
  ];

  const ticketIsValid = blockValidator
    ? block.every((e) => module10(e.num) === Number(e.DV))
    : true;
  const barCode = await ticketToBarCode(code);
  const amount = await ticketToValue(code);
  const date = await ticketToDate(code);
  return {
    barCode,
    date,
    amount,
    type: "Boleto Bancario",
    ticketIsValid,
  };
}
