import styled from "styled-components";
import PlusImg from "../../img/plus.svg";
import { ParameterStyle } from "../Parameters/MainParameter/MainParameter";

const Title = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  max-width: 80px;
  overflow: hidden;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Count = styled.span`
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
`;

const Img = styled.img`
  width: 27px;
  height: 27px;
  cursor: pointer;
`;

interface SkillProps {
  borderColor: string;
  title: string;
}

const Skill = ({borderColor, title}: SkillProps) => {
  return(
    <ParameterStyle style={{width: "205px"}} borderColor={borderColor}>
      <Title>{title}</Title>
      <Counter>
        <Count>0</Count>
        <Img src={PlusImg} alt="plus" />
      </Counter>
    </ParameterStyle>
  );
};

export default Skill;