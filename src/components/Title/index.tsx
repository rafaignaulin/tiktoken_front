import * as S from "./styles";

interface TitleProps {
  size?: number;
  children?: JSX.Element[] | JSX.Element | string;
}

const Title: React.FC<TitleProps> = ({ children, size = 2 }) => (
  <S.Title size={size}>{children}</S.Title>
);

export default Title;
