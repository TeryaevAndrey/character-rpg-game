import { Form, FormTitle } from "../../../App";
import FormInput from "../FormInput/FormInput";
import FormBtn from "../FormBtn/FormBtn";
import { Inputs } from "../../../App";
import FormLink from "../FormLink/FormLink";

const Authorization = () => {
  return (
    <Form>
      <FormTitle>Авторизация</FormTitle>
      <Inputs>
        <FormInput placeholder="Ваш email" />
        <FormInput placeholder="Ваш пароль" />
      </Inputs>
      <FormBtn title="Зайти" />
      <FormLink title="Перейти к регистрации" to="/registration" />
    </Form>
  );
};

export default Authorization;
