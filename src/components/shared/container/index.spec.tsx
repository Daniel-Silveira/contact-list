import { render, screen } from "@testing-library/react";
import { Container } from ".";

describe("Container", () => {
  it("should render", () => {
    render(<Container />);
  });

  it("should display the title", () => {
    render(<Container title="test" />);
    const title = screen.getByText("test");
    expect(title).toBeInTheDocument();
  });

  it("should display the button", () => {
    render(<Container textButton="click me" />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("not should display not the button", () => {
    render(<Container />);
    const btn = screen.queryByRole("button");
    expect(btn).not.toBeInTheDocument();
  });

  it("should display the children component", () => {
    render(
      <Container>
        <div data-testid="child-component"></div>
      </Container>
    );
    const children = screen.getByTestId("child-component");
    expect(children).toBeInTheDocument();
  });
});
