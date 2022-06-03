import {
  ticketToBarCode,
  ticketToDate,
  ticketToValue,
} from "../../src/app/modules/ticket/ticket/function/ticket-function";
import { digitaLine, ResponseMockBancario } from "../mocks/ticket-mock";

describe("Unit test Ticket Function", () => {
  it("should be call ticketToBarCode and return barCode corrects", async () => {
    const result = await ticketToBarCode(digitaLine.code);
    expect(result).toEqual(ResponseMockBancario.barCode);
  });

  it("should be call ticketToValue and return amount corrects", async () => {
    const result = await ticketToValue(digitaLine.code);
    expect(result).toEqual(ResponseMockBancario.amount);
  });

  it("should be call ticketToDate and return date corrects", async () => {
    const result = await ticketToDate(digitaLine.code);
    expect(result).toEqual(ResponseMockBancario.date);
  });
});
