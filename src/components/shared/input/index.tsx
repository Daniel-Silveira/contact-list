import * as S from "./styled";

interface PropsInput {
  margin?: [string, string];
  placeholder?: string;
}

const marginConfig = (array: any) => {
  if (!!array) {
    const marginType = `${array[0] ? `-${array[0]}` : array[0]}`;
    return `margin${marginType}: ${array[1]}`;
  }
  return "margin: auto";
};

export const Input = ({ margin, ...rest }: PropsInput) => {
  const marginRender = marginConfig(margin);
  if (!marginRender) return null;
  return <S.Input margin={marginRender} {...rest} />;
};
