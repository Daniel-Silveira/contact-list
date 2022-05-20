import { convertDate } from "@/services/utils";
import { Contact } from "@/types/contact";
import { FiEdit, FiTrash } from "react-icons/fi";
import { ActionButton } from "../../shared/actionButton";
import * as S from "./styled";

interface CardProps extends Contact {
  variants?: any;
  onEdit?: () => void;
  onRemove?: () => void;
  cyRefEditButton?: string;
  cyRefRemoveButton?: string;
}

const noUser =
  "https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1";

export const Card = (props: CardProps) => {
  return (
    <S.Card variants={props.variants} data-cy="card-contact">
      <S.Wrapper width="20%">
        <S.Avatar src={props.url || noUser} />
        <S.Text>{props.name}</S.Text>
      </S.Wrapper>
      <S.Wrapper width="25%">
        <S.Text>{props.email}</S.Text>
      </S.Wrapper>
      <S.Wrapper width="15%">
        <S.Text>{props.company}</S.Text>
      </S.Wrapper>
      <S.Wrapper width="15%">
        <S.Text>{props.phone}</S.Text>
      </S.Wrapper>
      <S.Wrapper width="11%">
        <S.Text>{props.age} anos</S.Text>
      </S.Wrapper>
      <S.WrapperAction>
        <S.Text data-testid="date">{convertDate(props.createdAt)}</S.Text>
      </S.WrapperAction>
      <S.WrapperAction>
        <ActionButton
          data-testid="edit"
          size="24px"
          icon={FiEdit}
          onClick={props.onEdit}
          data-cy={props.cyRefEditButton}
        />
        <ActionButton
          data-testid="remove"
          size="24px"
          icon={FiTrash}
          onClick={props.onRemove}
          data-cy={props.cyRefRemoveButton}
        />
      </S.WrapperAction>
    </S.Card>
  );
};
