import { describe, it } from "mocha";
import * as main from "../src/main";

describe("#foo", () => {
  it("does stuff", () => {
    main.httpTrackEvent(true);
  });
});

describe("#axiosClient", () => {
  context("when true", () => {
    it("does stuff", () => {
      main.axiosClient(true);
    });
  });

  context("when false", () => {
    it("does stuff", () => {
      main.axiosClient(false);
    });
  });
});
