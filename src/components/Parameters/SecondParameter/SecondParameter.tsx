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
  value: number;
}

const SecondParameter = ({
  borderColor,
  title,
  value,
}: SecondParameterProps) => {
  return (
    <ParameterStyle borderColor={borderColor}>
      <Title>{title}</Title>
      <Count>{value}</Count>
    </ParameterStyle>
  );
};

export default SecondParameter;
