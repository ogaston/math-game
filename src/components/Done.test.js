import React from "react";
import { render } from "@testing-library/react";
import Done from "./Done";

describe("Done component", () => {
  test("Matches the snapshot", () => {
    const { asFragment } = render(
      <Done points={100} retryGame={() => {}} onReStartGame={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render the GAME OVER and FINAL SCORE text", () => {
    const { container } = render(
        <Done points={100} retryGame={() => {}} onReStartGame={() => {}} />
      );

    expect(container.querySelector("h1").innerHTML).toBe(`GAME OVER`)
    expect(container.querySelectorAll("h3")[1].innerHTML).toBe(`RETRY`)
    expect(container.querySelectorAll("h3")[0].innerHTML).toContain(`FINAL SCORE`)
  });
});
