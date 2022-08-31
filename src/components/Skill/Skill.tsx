import styled from "styled-components";
import PlusImg from "../../img/plus.svg";
import { ParameterStyle } from "../Parameters/MainParameter/MainParameter";

const Title = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  width: 80px;
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
  width: 20px;
  margin-left: 10px;
`;

const Img = styled.img`
  width: 27px;
  height: 27px;
  cursor: pointer;
`;

const Level = styled.p`
  font-size: 14px;
`;

interface SkillProps {
  borderColor: string;
  title: string;
  value: number;
  increment: Function;
  level: number;
}

const Skill = ({borderColor, title, value, increment, level}: SkillProps) => {
  return(
    <ParameterStyle style={{width: "270px"}} borderColor={borderColor}>
      <Title>{title}</Title>
      <Counter>
        <Count>{value}</Count>
        <Img onClick={() => increment()} src={PlusImg} alt="plus" />
      </Counter>
      <Level>{level} level</Level>
    </ParameterStyle>
  );
};

export default Skill;
