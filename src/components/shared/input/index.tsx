import * as S from "./styled";

interface PropsInput {
  margin?: [string, string];
  placeholder?: string;
  value?: string;
  onChangeValue?: (value: string) => void;
  "data-cy"?: string;
}

const marginConfig = (array: any) => {
  if (!!array) {
    const marginType = `${array[0] ? `-${array[0]}` : array[0]}`;
    return `margin${marginType}: ${array[1]}`;
  }
  return "margin: auto";
};

export const Input = (props: PropsInput) => {
  const marginRender = marginConfig(props?.margin);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    !!props.onChangeValue && props.onChangeValue(e.target.value);

  if (!marginRender) return null;
  return (
    <S.Input
      marginConfig={marginRender}
      onChange={onChange}
      value={props.value}
      placeholder={props.placeholder}
      data-cy={props["data-cy"]}
    />
  );
};
