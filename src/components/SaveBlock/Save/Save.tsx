import styled from "styled-components";
import ImportImg from "../../../img/import.svg";
import deleteImg from "../../../img/delete.svg";
import axios from "axios";
import { useAppDispatch } from "../../../store/Hooks";
import { getDataCharacters } from "../../../store/Store";
import { setMainParameters, setSecondParameters, setSkills } from "../../../store/Character";

const SaveStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 30px;
  gap: 10px;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  margin-right: auto;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

interface SaveProps {
  title: string;
  id: string;
}

const Save = ({ title, id }: SaveProps) => {
  const dispatch = useAppDispatch();

  const deleteData = (id: string) => {
    axios.delete(`http://localhost:3001/characters/${id}`);
    dispatch(getDataCharacters());
  };

  const importData = (idCharacter: string) => {
    axios.get(`http://localhost:3001/characters/${idCharacter}`).then(res => {
      let data = res.data;
      
      dispatch(setMainParameters(data.mainParameters));
      dispatch(setSecondParameters(data.secondParameters));
      dispatch(setSkills(data.skills));
    });

  }

  return (
    <SaveStyle>
      <Title>{title}</Title>
      <Img onClick={() => deleteData(id)} src={deleteImg} alt="delete" />
      <Img onClick={() => importData(id)} src={ImportImg} alt="import" />
    </SaveStyle>
  );
};

export default Save;
