import styled from "styled-components";
import {useAppSelector} from "../../store/Hooks";
import SecondParameter from "../Parameters/SecondParameter/SecondParameter";

const SecondParametersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const SecondParameters = () => {
  const secondParametersData = useAppSelector((state) => state.character.secondParameters);

  const secondParameters = [
    {
      name: "Жизненная сила",
      value: secondParametersData.lifeForce,
      borderColor: "#302020"
    },
    {
      name: "Уклонение",
      value: secondParametersData.evasion,
      borderColor: "#37492C"
    },
    {
      name: "Энергичность",
      value: secondParametersData.energy,
      borderColor: "#3B6C81"
    },
  ]
  return (
    <SecondParametersStyle>
      {
        secondParameters.map((parameter) => (
          <SecondParameter key={parameter.name} borderColor={parameter.borderColor} title={parameter.name} value={parameter.value} />
        ))
      }
    </SecondParametersStyle>
  );
};

export default SecondParameters;
