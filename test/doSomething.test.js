import { expect } from "chai";
import sinon from "sinon";
import { doSomething } from "../doSomething.js";

describe("doSomething", () => {
  it("Функция должна вернуть callback со статусом Success", () => {
    const callback = sinon.spy();
    doSomething(true, callback);

    expect(callback.calledOnce).to.be.true;
    expect(callback.calledWith("Success!")).to.be.true;
  });

  it("Функция должна вернуть callback со статусом Failure", () => {
    const callback = sinon.spy();
    doSomething(false, callback);

    expect(callback.calledOnce).to.be.true;
    expect(callback.calledWith("Failure!")).to.be.true;
  });
});
