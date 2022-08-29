import styled from "styled-components";
import MainParameters from "../../components/MainParameters/MainParameters";
import SecondParameters from "../../components/SecondParameters/SecondParameters";
import Name from "../../components/Name/Name";
import Skills from "../../components/Skills/Skills";
import SaveBlock from "../../components/SaveBlock/SaveBlock";
import ExitImg from "../../img/exit.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/Hooks";
import { setCurrentUser } from "../../store/Store";
// import EditName from "../../components/Name/EditName/EditName";

const ParametersWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
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
`;

const Character = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const exitFromProfile = () => {
    navigate("/");
    dispatch(setCurrentUser(""));
    localStorage.removeItem("id");
  };

  return (
    <div className="Character">
      <Header>
        <Name />
        <Exit onClick={exitFromProfile} src={ExitImg} alt="exit" />
      </Header>
      <ParametersWrapper>
        <MainParameters />
        <SecondParameters />
      </ParametersWrapper>
      <Skills />
      {/* <EditName /> */}
      <SaveBlock />
    </div>
  );
};

export default Character;
