import CallToActionSection from "@/components/section/call-to-action";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { innerTextLength } from "../utils/helpers";
import { renderWithProviders } from "../utils/render-connected";
import { useRouterMock } from "../utils/useRouter";

describe("Call To Action Section", () => {
  beforeEach(() => useRouterMock());
  it("renders call to action section", () => {
    const { container } = renderWithProviders(<CallToActionSection />);
    // check if the component is rendered
    expect(screen.getByTestId("b-call-to-action")).toBeInTheDocument();
    // check the call to action container has some heading text inside
    const length = innerTextLength(container, "h2");
    expect(length).toBeGreaterThan(0);
  });
});
