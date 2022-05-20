import { render, screen } from "@testing-library/react";
import { Modal } from ".";

describe("Modal", () => {
  it("should render", () => {
    render(<Modal show={true} title="modal" />);
  });

  it("should display the title", () => {
    render(<Modal show={true} title="modal" />);
    const title = screen.getByText("modal");
    expect(title).toBeInTheDocument();
  });

  it("not should display the modal", () => {
    render(<Modal show={false} title="modal" />);
    const title = screen.queryByText("modal");
    expect(title).not.toBeInTheDocument();
  });

  it("should display the children component", () => {
    render(
      <Modal show={true} title="modal">
        <div data-testid="child-component"></div>
      </Modal>
    );
    const children = screen.getByTestId("child-component");
    expect(children).toBeInTheDocument();
  });
});
