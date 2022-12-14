import { ErrorText, Form, FormTitle, validEmail } from "../../../App";
import { FormInputStyle } from "../../../App";
import FormBtn from "../FormBtn/FormBtn";
import { Inputs } from "../../../App";
import FormLink from "../FormLink/FormLink";
import {SubmitHandler, useForm} from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/Hooks";
import { useNavigate } from "react-router-dom";
import { checkEmailError, checkPasswordError } from "../../../store/Authorization";
import { getDataCharacters, setCurrentUser } from "../../../store/Store";

interface AuthorizationData {
  email: string;
  password: string;
}

const Authorization = () => {
  const users = useAppSelector((state) => state.main.dataUsers);
  const emailError = useAppSelector((state) => state.authorization.emailError);
  const passwordError = useAppSelector((state) => state.authorization.passwordError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {register, handleSubmit} = useForm<AuthorizationData>();

  const onSubmit: SubmitHandler<AuthorizationData> = (data) => {
    users.forEach((user) => {
      if(!validEmail(data.email)) {
        dispatch(checkEmailError(true));
      }
      if(data.password !== user.password || data.password.length < 0) {
        dispatch(checkPasswordError(true));
      }

      if(!validEmail(data.email) && (data.password !== user.password || data.password.length < 0)) {
        dispatch(checkEmailError(true));
        dispatch(checkPasswordError(true));
      }

      if(validEmail(data.email) && data.password === user.password) {
        navigate("/profile");
        dispatch(setCurrentUser(user.id));
        localStorage.setItem("id", user.id);
        dispatch(checkEmailError(false));
        dispatch(checkPasswordError(false));
        dispatch(getDataCharacters());
      }
    });

    if(users.length < 1) {
      dispatch(checkEmailError(true));
        dispatch(checkPasswordError(true));
    }
  };
  

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormTitle>??????????????????????</FormTitle>
      <Inputs>
        {emailError && <ErrorText>???????????????? ?????? ???????????????????????? email</ErrorText>}
        <FormInputStyle {...register("email")} type="email" placeholder="?????? email" />
        {passwordError && <ErrorText>???????????????? ????????????</ErrorText>}
        <FormInputStyle {...register("password")} type="password" placeholder="?????? ????????????" />
      </Inputs>
      <FormBtn title="??????????" />
      <FormLink title="?????????????? ?? ??????????????????????" to="/registration" />
    </Form>
  );
};

export default Authorization;
