import { convenio } from "../../src/app/modules/ticket/convenio/convenio-bank";
import { digitaLine, ResponseMockConvenio } from "../mocks/convenio-mock";
describe("Unit test Convenio", () => {
  it("should be call convenio and return corrects", async () => {
    const result = await convenio(digitaLine.code);
    expect(result).toEqual(ResponseMockConvenio);
  });
});
