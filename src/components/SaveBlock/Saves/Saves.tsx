import styled from "styled-components";
import { useAppSelector } from "../../../store/Hooks";
import Save from "../Save/Save";

const SavesStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Saves = () => {
  const characters = useAppSelector((state) => state.main.dataCharacters);
  const currentUser = useAppSelector((state) => state.main.currentUser);

  return(
    <SavesStyle>
      {
        characters.map((character) => (
          character.currentUser === currentUser && <Save key={character.id} title={character.currentName} id={character.id} />
        )).reverse()
      }
    </SavesStyle>
  );
};

export default Saves;