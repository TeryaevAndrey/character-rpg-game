import { Form, FormTitle } from "../../../App";
import { FormInputStyle } from "../../../App";
import FormBtn from "../FormBtn/FormBtn";
import { Inputs } from "../../../App";
import FormLink from "../FormLink/FormLink";
import { validEmail } from "../../../App";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/Hooks";
import { ErrorText } from "../../../App";
import {
  checkEmailError,
  checkPasswordError,
  checkValidForm,
} from "../../../store/Registration";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v1 as uuid } from "uuid";
import { getDataCharacters, setCurrentUser } from "../../../store/Store";

interface RegistrationData {
  email: string;
  password: string;
  passwordRepeat: string;
}

const Registration = () => {
  const dispatch = useAppDispatch();
  const emailError = useAppSelector((state) => state.registration.emailError);
  const passwordError = useAppSelector(
    (state) => state.registration.passwordError
  );
  const validForm = useAppSelector((state) => state.registration.validForm);
  const currentUser = useAppSelector((state) => state.main.currentUser);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegistrationData>();

  const onSubmit: SubmitHandler<RegistrationData> = (data) => {
    if (!validEmail(data.email)) {
      dispatch(checkEmailError(true));
    } else {
      dispatch(checkEmailError(false));
    }

    if (data.password !== data.passwordRepeat) {
      dispatch(checkPasswordError(true));
    } else {
      dispatch(checkPasswordError(false));
    }

    if (!validEmail(data.email) || data.password !== data.passwordRepeat) {
      dispatch(checkValidForm(false));
    }

    if (validEmail(data.email) && data.password === data.passwordRepeat) {
      interface UserData {
        id: string;
        email: string;
        password: string;
      }

      const userData: UserData = {
        id: uuid(),
        email: data.email,
        password: data.password,
      };

      axios.post("http://localhost:3001/users", userData);
      dispatch(setCurrentUser(userData.id));
      localStorage.setItem("id", userData.id);
      navigate("/profile");
      dispatch(getDataCharacters());
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormTitle>Регистрация</FormTitle>
      <Inputs>
        {emailError && <ErrorText>Введите email корректно</ErrorText>}
        <FormInputStyle
          {...register("email")}
          type="email"
          placeholder="Ваш email"
        />
        {passwordError && <ErrorText>Пароли не совпадают</ErrorText>}
        <FormInputStyle
          {...register("password")}
          type="password"
          placeholder="Пароль"
        />
        <FormInputStyle
          {...register("passwordRepeat")}
          type="password"
          placeholder="Повтор пароля"
        />
      </Inputs>
      <FormBtn title={validForm ? "Успешно" : "Зарегистрироваться"} />
      <FormLink title="Вернуться к входу" to="/" />
    </Form>
  );
};

export default Registration;
