import BannerSection from "@/components/section/banner";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { checkInnerTextIsNotNull } from "../utils/helpers";

describe('Banner Section', () => {
    it('renders banner section', () => {
        const { container } = render(<BannerSection />);
        // check if the component is rendered
        expect(screen.getByTestId('b-banner-section')).toBeInTheDocument();

        // check the banner container has some heading text inside
        const length = checkInnerTextIsNotNull(container, 'h1');
        expect(length).toBeGreaterThan(0);
    });
});

