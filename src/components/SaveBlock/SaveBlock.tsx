import styled from 'styled-components';
import Saves from './Saves/Saves';
import SaveCurrent from './SaveCurrent/SaveCurrent';
import { useAppDispatch } from '../../store/Hooks';
import { setOpenSaveBlock } from '../../store/SaveBlock';

const SaveBlockStyle = styled.div`
  width: 230px;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #171F22;
  z-index: 1;
`;

const SaveBlockInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 55px 25px;
  height: 100%;
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

const CloseBtn = styled.div`
  transform: rotate(-45deg);
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
`;

const SaveBlock = () => {
  const dispatch = useAppDispatch();

  return(
    <SaveBlockStyle>
      <SaveBlockInner>
        <CloseBtn onClick={() => dispatch(setOpenSaveBlock(false))}>+</CloseBtn>
        <Title>Сохранения</Title>
        <TitleText>Макс.сохранений - 10</TitleText>
        <Saves />
        <SaveCurrent />
      </SaveBlockInner>
    </SaveBlockStyle>
  );
};

export default SaveBlock;