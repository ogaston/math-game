import React from "react";
import { render, wait } from '@testing-library/react'
import Timmer from './Timmer'

describe("Timmer component", () => {

    test("Matches the snapshot", () => {
        const { asFragment } = render(<Timmer seconds={50} />);
        expect(asFragment()).toMatchSnapshot()
    });


    test("Check if seconds are rendered", () => {
        const { container } = render(<Timmer seconds={20} />);
        const timeStart = container.querySelector("b");
        expect(Number(timeStart.innerHTML)).toBe(20)
    });


    test("Verify if seconds are in count down", async () => {
        const { container } = render(<Timmer seconds={30} />);
        const timeStart = container.querySelector("b");
        expect(Number(timeStart.innerHTML)).toBe(30)
        await wait(() => {
            expect(Number(timeStart.innerHTML)).toBe(28)
        }, {timeout: 2000})
    });

});