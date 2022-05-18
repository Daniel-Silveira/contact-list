import { FiMoreHorizontal, FiToggleLeft } from "react-icons/fi";
import { ActionButton } from "../../shared/actionButton";
import * as S from "./styled";

interface CardProps {
  url: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  active: boolean;
  age: Date;
  variants: any;
}

export const Card = (props: CardProps) => {
  return (
    <S.Card variants={props.variants}>
      <S.Wrapper width="15%">
        <S.Avatar src={props.url} />
        <S.Text>{props.name}</S.Text>
      </S.Wrapper>
      <S.Wrapper width="30%">
        <S.Text>{props.email}</S.Text>
      </S.Wrapper>
      <S.Wrapper width="15%">
        <S.Text>{props.company}</S.Text>
      </S.Wrapper>
      <S.Wrapper width="15%">
        <S.Text>{props.phone}</S.Text>
      </S.Wrapper>
      <S.Wrapper width="11%">
        <S.Text>{new Date(props.age).getDay()} anos</S.Text>
      </S.Wrapper>
      <S.WrapperAction>
        <ActionButton size="24px" icon={FiToggleLeft} />
      </S.WrapperAction>
      <S.WrapperAction>
        <ActionButton size="24px" icon={FiMoreHorizontal} />
      </S.WrapperAction>
    </S.Card>
  );
};
