import styled from "styled-components";
import { ParameterStyle, Count } from "../MainParameter/MainParameter";

const Title = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
`;

interface SecondParameterProps {
  borderColor: string;
  title: string;
}

const SecondParameter = ({ borderColor, title }: SecondParameterProps) => {
  return (
    <ParameterStyle borderColor={borderColor}>
      <Title>{title}</Title>
      <Count>0</Count>
    </ParameterStyle>
  );
};

export default SecondParameter;
