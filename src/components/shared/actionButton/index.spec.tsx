import { fireEvent, render, screen } from "@testing-library/react";
import { FiEdit } from "react-icons/fi";
import { ActionButton } from ".";

describe("Button", () => {
  it("should render", () => {
    render(<ActionButton icon={() => null} />);
  });

  it("should display the icon", () => {
    render(<ActionButton icon={FiEdit} />);
    const btn = screen.getByTestId("icon");
    expect(btn).toBeInTheDocument();
  });

  it("should call the function", () => {
    const fn = jest.fn();
    render(<ActionButton icon={FiEdit} onClick={fn} />);

    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
