import { Button, Input, Modal } from "@/components/shared";
import * as S from './styled'

interface CreateContactProps {
  show: boolean;
  onClose: () => void;
}

export const CreateContact = (props: CreateContactProps) => {
  return (
    <Modal
      title="Criar novo contato"
      show={props.show}
      onClose={props.onClose}
    >
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" margin={["top", "1em"]} />
      <Input placeholder="Empresa" margin={["top", "1em"]} />
      <S.GroupInputModal>
        <Input placeholder="Telefone" />
        <Input placeholder="Idade" margin={["left", "1em"]} />
      </S.GroupInputModal>
      <S.WrapperButtonModal>
        <Button text="Cadastrar" />
      </S.WrapperButtonModal>
    </Modal>
  );
};
