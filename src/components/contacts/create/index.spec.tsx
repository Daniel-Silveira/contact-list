import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CreateContact } from ".";

describe("CreateContact", () => {
  const queryClient = new QueryClient();

  it("should render", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CreateContact show={true} onClose={() => {}} />
      </QueryClientProvider>
    );
  });

  it("should display the inputs for new contact", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CreateContact show={true} onClose={() => {}} />
      </QueryClientProvider>
    );
    const inputName = screen.getByPlaceholderText("Nome");
    const inputEmail = screen.getByPlaceholderText("E-mail");
    const inputCompany = screen.getByPlaceholderText("Empresa");
    const inputUrl = screen.getByPlaceholderText("URL da foto");
    const inputPhone = screen.getByPlaceholderText("Telefone");
    const inputAge = screen.getByPlaceholderText("Idade");
    const btn = screen.getByText("Salvar");

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputCompany).toBeInTheDocument();
    expect(inputUrl).toBeInTheDocument();
    expect(inputPhone).toBeInTheDocument();
    expect(inputAge).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
