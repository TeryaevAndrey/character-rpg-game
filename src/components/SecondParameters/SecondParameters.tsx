import styled from "styled-components";
import SecondParameter from "../Parameters/SecondParameter/SecondParameter";

const SecondParametersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const SecondParameters = () => {
  return (
    <SecondParametersStyle>
      <SecondParameter borderColor="#302020" title="Жизненная сила" />
      <SecondParameter borderColor="#37492C" title="Уклонение" />
      <SecondParameter borderColor="#3B6C81" title="Энергичность" />
    </SecondParametersStyle>
  );
};

export default SecondParameters;
