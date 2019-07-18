import { describe, it } from "mocha";
import foo from "../src/main";

describe("#foo", () => {
  it("does stuff", () => {
    foo(true);
  });

  it("does other stuff", () => {
    foo(false);
  });
});
