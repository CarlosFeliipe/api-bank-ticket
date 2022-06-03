import { getTicket } from "../../src/app/modules/ticket/ticket/function/ticket-function"
import { digitaLine, ResponseMockBancario } from "../mocks/ticket-mock";

describe("Unit test Ticket", () => {
  it("should be call getTicket and return corrects", async () => {
    const result = await getTicket(digitaLine.code);
    expect(result).toEqual(ResponseMockBancario);
  })
})