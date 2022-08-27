import styled from "styled-components";
import MainParameter from "../../components/Parameters/MainParameter/MainParameter";
import PowerfulImg from "../../img/powerful.png";
import DexterityImg from "../../img/dexterity.png";
import IntelligenceImg from "../../img/intelligence.png";
import CharismaImg from "../../img/charisma.png";

const MainParametersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const MainParameters = () => {
  return (
    <MainParametersStyle>
      <MainParameter borderColor="#302020" img={PowerfulImg} title="Сила" />
      <MainParameter
        borderColor="#37492C"
        img={DexterityImg}
        title="Ловкость"
      />
      <MainParameter
        borderColor="#3B6C81"
        img={IntelligenceImg}
        title="Интеллект"
      />
      <MainParameter borderColor="#27385A" img={CharismaImg} title="Харизма" />
    </MainParametersStyle>
  );
};

export default MainParameters;
