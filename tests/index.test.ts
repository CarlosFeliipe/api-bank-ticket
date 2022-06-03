import { ticketOrConvenio } from "../src/app/modules/ticket";
import { ResponseMockConvenio } from "./mocks/convenio-mock";
import { ResponseMockBancario } from "./mocks/ticket-mock";

const digitaLine = {
  codeTicket: "26091408099776913423632700000006190050000019446",
  codeConvenio: "828900000008509100181711109222814012358741712157",
};
describe("Unit test Ticket Or Convenio", () => {
  it("should be call ticketOrConvenio and return Ticket Bank corrects", async () => {
    const result = await ticketOrConvenio(digitaLine.codeTicket);
    expect(result).toEqual(ResponseMockBancario);
  });
  it("should be call ticketOrConvenio and return Ticket Convenio corrects", async () => {
    const result = await ticketOrConvenio(digitaLine.codeConvenio);
    expect(result).toEqual(ResponseMockConvenio);
  });
});
