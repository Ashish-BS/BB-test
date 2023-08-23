import HowWeDoItSection from "@/components/section/how-we-do-it";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { innerTextLength } from "../utils/helpers";

describe('How We Do It Section', () => {
    it('renders how we do it section', () => {
        const {container} = render(<HowWeDoItSection />);
        // check if the component is rendered
		expect(screen.getByTestId('b-how-we-do-it')).toBeInTheDocument();

        // check the banner container has some heading text inside
        const length = innerTextLength(container, 'h2');
        expect(length).toBeGreaterThan(0);
    });
});
