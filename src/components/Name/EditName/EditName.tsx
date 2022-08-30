import styled from "styled-components";
import { FormInputStyle } from "../../../App";
import { SubmitHandler, useForm } from "react-hook-form";
import FormBtn from "../../Forms/FormBtn/FormBtn";
import { FormTitle } from "../../../App";
import { Inputs } from "../../../App";
import { useAppDispatch } from "../../../store/Hooks";
import { setCurrentName, setOpenModal } from "../../../store/Name";

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalInner = styled.form`
  position: relative;
  padding: 20px 35px 45px;
  background-color: #171f22;
  box-shadow: 0px 0px 14px 6px rgba(7, 8, 9, 0.25);
  border-radius: 20px;
  min-width: 300px;
`;

const ModalClose = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  transform: rotate(-45deg);
  top: 10px;
  right: 15px;
  cursor: pointer;
`;

interface NameForm {
  name: string;
}

const EditName = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<NameForm>();

  const onSubmit: SubmitHandler<NameForm> = (data) => {
    dispatch(setCurrentName(data.name));
    dispatch(setOpenModal(false));
  };

  return (
    <Modal>
      <ModalInner onSubmit={handleSubmit(onSubmit)}>
        <ModalClose onClick={() => dispatch(setOpenModal(false))}>+</ModalClose>
        <FormTitle>Изменение имени</FormTitle>
        <Inputs>
          <FormInputStyle
            {...register("name")}
            type="text"
            placeholder="Новое имя"
          />
        </Inputs>
        <FormBtn title="Сохранить" />
      </ModalInner>
    </Modal>
  );
};

export default EditName;
