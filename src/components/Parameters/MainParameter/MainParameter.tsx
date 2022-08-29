import React from "react";
import styled from "styled-components";
import MinImg from "../../../img/min.svg";
import PlusImg from "../../../img/plus.svg";

interface ParameterStyleProps {
  borderColor: string;
}

export const ParameterStyle = styled.div<ParameterStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  min-height: 50px;
  background-color: #12191b;
  border-radius: 10px;
  border: 1px solid ${(props) => props.borderColor};
  box-shadow: 0px 0px 10px rgba(93, 109, 115, 0.25);
  padding: 10px 25px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin-right: auto;
  margin-left: 10px;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CounterImg = styled.img`
  width: 27px;
  height: 27px;
  cursor: pointer;
`;

export const Count = styled.span`
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  width: 30px;
`;

interface ParameterProps {
  borderColor: string;
  img: any;
  title: string;
  count: number;
  decrement: Function;
  increment: Function;
}

const MainParameter = ({ borderColor, img, title, count, decrement, increment }: ParameterProps) => {
  return (
    <ParameterStyle borderColor={borderColor}>
      <Img src={img} alt="parameter" />
      <Title>{title}</Title>
      <Counter>
        <CounterImg onClick={() => decrement()} src={MinImg} alt="min" />
        <Count>{count}</Count>
        <CounterImg onClick={() => increment()} src={PlusImg} alt="plus" />
      </Counter>
    </ParameterStyle>
  );
};

export default MainParameter;
