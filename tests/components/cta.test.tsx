import CallToActionSection from "@/components/section/cta";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { innerTextLength } from "../utils/helpers";

describe('Call To Action Section', () => {
    it('renders call to action section', () => {
        const { container } = render(<CallToActionSection />);
        // check if the component is rendered
        expect(screen.getByTestId('b-call-to-action')).toBeInTheDocument();
        
        // check the banner container has some heading text inside
        const length = innerTextLength(container, 'h4');
        expect(length).toBeGreaterThan(0);
    });
});
