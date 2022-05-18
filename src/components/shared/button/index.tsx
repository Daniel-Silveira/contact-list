import * as S from "./styled";

interface ButtonProps {
  children?: any;
  text?: string;
  onClick?: () => void;
  width?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <S.Button width={props.width} onClick={props.onClick}>
      {props.children || props.text}
    </S.Button>
  );
};
