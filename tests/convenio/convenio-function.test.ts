import {
  convertToTicket,
  getConvenio,
  getValue,
} from "../../src/app/modules/ticket/convenio/function/convert";
import { digitaLine, ResponseMockConvenio } from "../mocks/convenio-mock";

describe("Unit test Ticket Function", () => {
  it("should be call convertToTicket and return barCode corrects", async () => {
    const result = await convertToTicket(digitaLine.code);
    expect(result).toEqual(ResponseMockConvenio.barCode);
  });

  it("should be call getValue and return amount corrects", async () => {
    const result = await getValue(digitaLine.code);
    expect(result).toEqual(ResponseMockConvenio.amount);
  });

  it("should be call getConvenio and return date corrects", async () => {
    const result = await getConvenio(digitaLine.code);
    expect(result).toEqual(ResponseMockConvenio);
  });
});
