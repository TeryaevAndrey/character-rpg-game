import styled from "styled-components";
import Save from "../Save/Save";

const SavesStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Saves = () => {
  return(
    <SavesStyle>
      <Save title="Оронгутанг" />
    </SavesStyle>
  );
};

export default Saves;