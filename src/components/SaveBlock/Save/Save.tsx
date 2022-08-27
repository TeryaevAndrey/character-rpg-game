import styled from "styled-components";
import ImportImg from "../../../img/import.svg";

const SaveStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 30px;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
`;

const Img = styled.img`
  width: 35px;
  height: 32px;
  cursor: pointer;
`;

interface SaveProps {
  title: string;
}

const Save = ({ title }: SaveProps) => {
  return (
    <SaveStyle>
      <Title>{title}</Title>
      <Img src={ImportImg} alt="import" />
    </SaveStyle>
  );
};

export default Save;
