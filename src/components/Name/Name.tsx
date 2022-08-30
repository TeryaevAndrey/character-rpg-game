import styled from "styled-components";
import NameBg from "../../img/name-bg.png";
import EditImg from "../../img/edit.svg";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { setOpenModal } from "../../store/Name";

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NameStyle = styled.div`
  min-width: 190px;
  min-height: 45px;
  background-image: url(${NameBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 15px 50px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(93, 109, 115, 0.25);
`;

const NameEdit = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Name = () => {
  const dispatch = useAppDispatch();
  const currentName = useAppSelector((state) => state.name.currentName);

  return (
    <NameWrapper>
      <NameStyle>{currentName}</NameStyle>
      <NameEdit onClick={() => dispatch(setOpenModal(true))} src={EditImg} alt="edit" />
    </NameWrapper>
  );
};

export default Name;
