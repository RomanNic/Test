import { expect } from "chai";
import { add } from "../sum.js";

describe("add", () => {
  it("Функция должна вернуть сумму чисел", () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it("Функция должна вернуть отрицательную сумму чисел", () => {
    const result = add(-2, -3);
    expect(result).to.equal(-5);
  });
});
