import styled from "styled-components";
import SaveImg from "../../../img/save.svg";

const SaveCurrentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-top: 10px;
`;

const SaveCurrent = () => {
  return(
    <SaveCurrentStyle>
      <Title>Сохранить текущие параметры</Title>
      <Img src={SaveImg} alt="save" />
    </SaveCurrentStyle>
  );
};

export default SaveCurrent;