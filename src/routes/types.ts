import { IconType } from "react-icons";

type PropsMain = { title: string };

export interface PropsRoute {
  path: string;
  main: ({ title }: PropsMain) => JSX.Element | null;
  title: string;
  icon: IconType;
  executeWhenNavigate?: () => void;
};
