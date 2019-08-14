import React from "react";
import { render, wait } from '@testing-library/react'
import Beginning from './Beginning'

describe("Beginning component", () => {

    test("Matches the snapshot", () => {
        const { asFragment } = render(<Beginning isComplete={()=>{}} />);
        expect(asFragment()).toMatchSnapshot()
    });


    test("The GET READY message should render", async () => {
        const { container } = render(<Beginning isComplete={()=>{}} />);
        const getReadyMsg = container.querySelector("h3").innerHTML
        expect(getReadyMsg).toBe("GET READY...")
    });


    test("The numbers should be counting down", async () => {
        const { container } = render(<Beginning isComplete={()=>{}} />);
        const countingDown = container.querySelector("h1")
        await wait(() => {
            expect(Number(countingDown.innerHTML)).toBe(1)
        }, {timeout: 2000})
        await wait(() => {
            expect(countingDown.innerHTML).toBe("GO")
        }, {timeout: 3000})
    });


    test("The isComplete function should be execute after GO", async () => {
        const mockIsComplete = jest.fn(x => x);
        const renderBeggining = render(<Beginning isComplete={mockIsComplete} />);
        await wait(() => {
            expect(mockIsComplete).toHaveBeenCalledTimes(1)
        }, {timeout: 4000})
    });
});