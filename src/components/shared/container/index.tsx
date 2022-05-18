import { Button } from "../button";
import * as S from "./styled";

interface ContainerProps {
  children?: React.ReactNode;
  title: string;
  textButton?: string;
  onClick?: () => void;
}

export const Container = (props: ContainerProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{props.title}</S.Title>
        <Button text={props.textButton} onClick={props.onClick} width="15%" />
      </S.Header>
      {props.children}
    </S.Container>
  );
};
