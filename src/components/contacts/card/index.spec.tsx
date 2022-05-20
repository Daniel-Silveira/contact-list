import { Contact } from "@/types/contact";
import { render, screen } from "@testing-library/react";
import { Card } from ".";

describe("CardContact", () => {
  const contact: Contact = {
    name: "Harvey",
    email: "test@gmail.com",
    phone: "00988888888",
    company: "corp",
    age: "40",
    createdAt: new Date(),
  };

  it("should render", () => {
    render(<Card />);
  });

  it("should display the contact data", () => {
    render(<Card {...contact} />);

    const avatar = screen.getByRole("img");
    const name = screen.getByText("Harvey");
    const email = screen.getByText("test@gmail.com");
    const phone = screen.getByText("00988888888");
    const company = screen.getByText("corp");
    const age = screen.getByText("40 anos");
    const createdAt = screen.getByTestId("date");
    const btnEdit = screen.getByTestId("edit");
    const btnRemove = screen.getByTestId("remove");

    expect(avatar).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
    expect(btnEdit).toBeInTheDocument();
    expect(btnRemove).toBeInTheDocument();
  });
});
