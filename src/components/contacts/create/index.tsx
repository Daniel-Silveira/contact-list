import { Button, Input, Modal } from "@/components/shared";
import { useContact } from "@/hooks/useContact";

import { Contact } from "@/types/contact";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import * as S from "./styled";

interface CreateContactProps {
  show: boolean;
  onClose: () => void;
  contactEdit: Contact;
}

export const CreateContact = (props: CreateContactProps) => {
  const { createContact, editContact } = useContact();
  const queryClient = useQueryClient();

  const [contact, setContact] = useState<Contact>({});

  const handleChangeState = (value: string, key: string) => {
    setContact({ ...contact, [key]: value });
    return;
  };

  useEffect(() => {
    setContact(props.contactEdit);
  }, [props.contactEdit]);

  const handleNewContact = async () => {
    const { status } = await createContact(contact);
    if (status === 201) {
      await queryClient.invalidateQueries(["contacts"]);
      props.onClose();
    }
  };

  const handleEditContact = async () => {
    const { status } = await editContact(contact);
    if (status === 200) {
      await queryClient.invalidateQueries(["contacts"]);
      props.onClose();
    }
  };

  return (
    <Modal title={props.contactEdit ? 'Editar contato' : "Criar novo contato"} show={props.show} onClose={props.onClose}>
      <Input
        placeholder="Nome"
        value={contact.name}
        onChangeValue={(value) => handleChangeState(value, "name")}
      />
      <Input
        placeholder="E-mail"
        margin={["top", "1em"]}
        value={contact.email}
        onChangeValue={(value) => handleChangeState(value, "email")}
      />
      <Input
        placeholder="Empresa"
        margin={["top", "1em"]}
        value={contact.company}
        onChangeValue={(value) => handleChangeState(value, "company")}
      />
      <Input
        placeholder="URL da foto"
        margin={["top", "1em"]}
        value={contact.url}
        onChangeValue={(value) => handleChangeState(value, "url")}
      />
      <S.GroupInputModal>
        <Input
          placeholder="Telefone"
          value={contact.phone}
          onChangeValue={(value) => handleChangeState(value, "phone")}
        />
        <Input
          placeholder="Idade"
          margin={["left", "1em"]}
          value={contact.age}
          onChangeValue={(value) => handleChangeState(value, "age")}
        />
      </S.GroupInputModal>
      <S.WrapperButtonModal>
        <Button
          text="Salvar"
          onClick={!!props.contactEdit._id ? handleEditContact : handleNewContact}
        />
      </S.WrapperButtonModal>
    </Modal>
  );
};
