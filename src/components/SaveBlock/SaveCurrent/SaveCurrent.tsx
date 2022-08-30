import styled from "styled-components";
import SaveImg from "../../../img/save.svg";
import { useAppDispatch, useAppSelector } from "../../../store/Hooks";
import {v1 as uuid} from "uuid";
import axios from "axios";
import { getDataCharacters } from "../../../store/Store";

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
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.main.currentUser);
  const mainParameters = useAppSelector((state) => state.character.mainParameters);
  const secondParameters = useAppSelector((state) => state.character.secondParameters);
  const skills = useAppSelector((state) => state.character.skills);
  const currentName = useAppSelector((state) => state.name.currentName);

  const saveCurrent = () => {
    const info = {
      id: uuid(),
      currentUser,
      mainParameters,
      secondParameters,
      skills,
      currentName,
    };

    dispatch(getDataCharacters());
    axios.post("http://localhost:3001/characters", info);
    dispatch(getDataCharacters());
  };

  return(
    <SaveCurrentStyle>
      <Title>Сохранить текущие параметры</Title>
      <Img onClick={saveCurrent} src={SaveImg} alt="save" />
    </SaveCurrentStyle>
  );
};

export default SaveCurrent;