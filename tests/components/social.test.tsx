import SocialProofSection from "@/components/section/social";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { innerTextLength } from "../utils/helpers";

describe('Social Proof Section', () => {
    it('renders social proof section', () => {
        const { container } = render(<SocialProofSection />);
        // check if the component is rendered
        expect(screen.getByTestId('b-social-proof-section')).toBeInTheDocument();

        // check the banner container has some heading text inside
        const length = innerTextLength(container, 'h2');
        expect(length).toBeGreaterThan(0);

    });
});
