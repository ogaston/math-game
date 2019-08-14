import React from "react";
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe("Button component", () => {

    test("Matches the snapshot", () => {
        const { asFragment } = render(<Button>The Button</Button>);
        expect(asFragment()).toMatchSnapshot()
    });


    test("The child text should be rendered", () => {
        const { container } = render(<Button>The Button</Button>);
        expect(container.querySelector("button").innerHTML).toBe("The Button")
    });


    test("The function should be executed when is clicked", async () => {
        const funcCallback = jest.fn(x => 42 + x);
        const { container } = render(<Button isClicked={funcCallback}>The Button</Button>);
        fireEvent.click(container.querySelector("button"))
        expect(funcCallback).toHaveBeenCalledTimes(1)
    });

});