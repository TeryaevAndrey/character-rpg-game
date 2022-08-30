import styled from "styled-components";
import { useAppSelector } from "../../store/Hooks";
import SecondParameter from "../Parameters/SecondParameter/SecondParameter";

const SecondParametersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const SecondParameters = () => {
  const secondParameters = useAppSelector((state) => state.character.secondParameters);

  return (
    <SecondParametersStyle>
      <SecondParameter
        borderColor="#302020"
        title="Жизненная сила"
        value={secondParameters.lifeForce}
      />
      <SecondParameter
        borderColor="#37492C"
        title="Уклонение"
        value={secondParameters.evasion}
      />
      <SecondParameter
        borderColor="#3B6C81"
        title="Энергичность"
        value={secondParameters.energy}
      />
    </SecondParametersStyle>
  );
};

export default SecondParameters;
