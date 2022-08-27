import styled from "styled-components";
import MainParameters from "../../components/MainParameters/MainParameters";
import SecondParameters from "../../components/SecondParameters/SecondParameters";
import Name from "../../components/Name/Name";
import Skills from "../../components/Skills/Skills";
import SaveBlock from "../../components/SaveBlock/SaveBlock";

const ParametersWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
`;

const Character = () => {
  return (
    <div className="Character">
      <Name />
      <ParametersWrapper>
        <MainParameters />
        <SecondParameters />
      </ParametersWrapper>
      <Skills />

      <SaveBlock />
    </div>
  );
};

export default Character;
