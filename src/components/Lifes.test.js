import React from "react";
import { render } from "@testing-library/react";
import Lifes from "./Lifes";

describe("Lifes component", () => {
  test("Matches the snapshot", () => {
    const { asFragment } = render(<Lifes lifes={3} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Show the hearts according to the props passed", () => {
    const { container } = render(<Lifes lifes={3} />);
    expect(container.querySelectorAll(".fa-heart").length).toBe(3)
  });


  test("Show the number of hearts and one icon when the user has more than 4", () => {
    const { container, rerender } = render(<Lifes lifes={3} />);
    expect(container.querySelectorAll(".fa-heart").length).toBe(3)
    rerender(<Lifes lifes={5} />)
    expect(container.querySelectorAll(".fa-heart").length).toBe(1)
    expect(container.querySelector("b").innerHTML).toBe("5x")
  });

});
