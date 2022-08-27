import styled from 'styled-components';
import Saves from './Saves/Saves';
import SaveCurrent from './SaveCurrent/SaveCurrent';

const SaveBlockStyle = styled.div`
  width: 230px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #171F22;
  padding: 55px 25px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

const TitleText = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 14px;
`;

const SaveBlock = () => {
  return(
    <SaveBlockStyle>
      <Title>Сохранения</Title>
      <TitleText>Макс.сохранений - 10</TitleText>
      <Saves />
      <SaveCurrent />
    </SaveBlockStyle>
  );
};

export default SaveBlock;