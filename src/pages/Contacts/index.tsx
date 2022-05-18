import { CreateContact } from "@/components/contacts";
import { Card } from "@/components/contacts/card";
import { Container } from "@/components/shared";
import { useState } from "react";
import * as S from "./styled";

interface ContactProps {
  title: string;
}

const mock = [
  {
    url: "https://statig1.akamaized.net/fw/a8/eu/gv/a8eugvqkaw1ldphsrgm54yj7n.jpg",
    name: "Joao Silva",
    email: "joaoasilva@gmail.com",
    phone: "11942342342",
    company: "Empresa 1",
    active: false,
    age: new Date(),
  },
  {
    url: "https://statig1.akamaized.net/fw/a8/eu/gv/a8eugvqkaw1ldphsrgm54yj7n.jpg",
    name: "Joao Silva",
    email: "joaoasilva@gmail.com",
    phone: "11942342342",
    company: "Empresa 1",
    active: false,
    age: new Date(),
  },
];

const animateListVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const animateCardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Contacts = (props: ContactProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <>
      <CreateContact show={showModal} onClose={handleCloseModal} />
      <Container
        title={props.title}
        textButton="Novo contato"
        onClick={handleOpenModal}
      >
        <S.WrapperContacts
          initial="hidden"
          animate="visible"
          variants={animateListVariants}
        >
          <S.Header variants={animateCardVariants}>
            <S.Text width="15%">Nome</S.Text>
            <S.Text width="30%">E-mail</S.Text>
            <S.Text width="15%">Empresa</S.Text>
            <S.Text width="15%">Telefone</S.Text>
            <S.Text width="11%">Idade</S.Text>
            <S.Text width="7%">Ativo</S.Text>
            <S.Text width="7%">Açōes</S.Text>
          </S.Header>
          {mock.map((item) => (
            <Card variants={animateCardVariants} {...item} />
          ))}
        </S.WrapperContacts>
      </Container>
    </>
  );
};

export default Contacts;
