import { expect } from "chai";
import sinon from "sinon";
import { fetchUsers } from "../userService.js";

describe("FetchUsers", () => {
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it("должна вернуть массив пользователей", async () => {
    const userPromise = fetchUsers();
    clock.tick(1000);
    const result = await userPromise;
    expect(result).to.be.an("array");
  });

  it("должна вернуть массив из двух элементов", async () => {
    const userPromise = fetchUsers();
    clock.tick(1000);
    const result = await userPromise;
    expect(result).to.have.lengthOf(2);
  });

  it("должна вернуть первый элемент с именем 'Leanne Graham'", async () => {
    const userPromise = fetchUsers();
    clock.tick(1000);
    const result = await userPromise;
    expect(result[0]).to.have.property("name", "Leanne Graham");
  });
});
