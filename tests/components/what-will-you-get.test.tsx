import WhatYouWillGetSection from "@/components/section/what-will-you-get";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { checkInnerTextIsNotNull } from "../utils/helpers";

describe('What Will You Get Section', () => {
    it('renders what will you get section', () => {
        const { container } = render(<WhatYouWillGetSection />);
        // check if the component is rendered
        expect(screen.getByTestId('b-what-will-you-get')).toBeInTheDocument();

        // check the banner container has some heading text inside
         const length = checkInnerTextIsNotNull(container, 'h2');
        expect(length).toBeGreaterThan(0);
    });
});
