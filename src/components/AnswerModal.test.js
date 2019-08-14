import React from "react";
import { render } from '@testing-library/react'
import AnswerModal from './AnswerModal'

describe("AnswerModal component", () => {

    test("Matches the snapshot", () => {
        const { asFragment } = render(<AnswerModal />);
        expect(asFragment()).toMatchSnapshot()
    });

    test("Should render an icon depends on its type props (success or error)", () => {
        const { container, rerender  } = render(<AnswerModal type="success" />);
        const successIcon = container.querySelector(".correct-answer").querySelector(".fas")
        expect(successIcon.tagName.toLowerCase()).toBe("i")

        rerender(<AnswerModal type="error" />)
        const errorIcon = container.querySelector(".wrong-answer").querySelector(".fas")
        expect(errorIcon.tagName.toLowerCase()).toBe("i")
    })
});