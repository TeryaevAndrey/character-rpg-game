import styled from "styled-components";
import MainParameters from "../../components/MainParameters/MainParameters";
import SecondParameters from "../../components/SecondParameters/SecondParameters";
import Name from "../../components/Name/Name";
import Skills from "../../components/Skills/Skills";
import ExitImg from "../../img/exit.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { getDataUsers, setCurrentUser } from "../../store/Store";
import EditName from "../../components/Name/EditName/EditName";
import { setOpenSaveBlock } from "../../store/SaveBlock";
import SaveBlock from "../../components/SaveBlock/SaveBlock";

const CharacterStyle = styled.div`
  position: relative;
`;

const ParametersWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  flex-wrap: wrap;
  
  @media(max-width: 420px) {
    justify-content: center;
  }
`;

const Exit = styled.img `
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  padding: 40px 0;

  @media(max-width: 500px) {
    gap: 10px;
    padding: 20px 0;
  }
`;

const SaveOpenBtn = styled.button`
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #12191b;
  margin-left: auto;
`;

const Character = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const isName = useAppSelector((state) => state.name.isOpenModal);
  const isSaveBlock = useAppSelector((state) => state.saveBlock.isSaveBlock);

  const exitFromProfile = () => {
    navigate("/");
    dispatch(setCurrentUser(""));
    localStorage.removeItem("id");
    dispatch(getDataUsers());
  };

  return (
    <CharacterStyle>
      <Header>
        <Name />
        <Exit onClick={exitFromProfile} src={ExitImg} alt="exit" />
        <SaveOpenBtn onClick={() => dispatch(setOpenSaveBlock(true))}>Сохранения</SaveOpenBtn>
      </Header>
      <ParametersWrapper>
        <MainParameters />
        <SecondParameters />
      </ParametersWrapper>
      <Skills />
      {isName && <EditName />}
      {isSaveBlock && <SaveBlock />}
    </CharacterStyle>
  );
};

export default Character;
