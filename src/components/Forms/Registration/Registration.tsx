import { Form, FormTitle } from "../../../App";
import FormInput from "../FormInput/FormInput";
import FormBtn from "../FormBtn/FormBtn";
import { Inputs } from "../../../App";
import FormLink from "../FormLink/FormLink";

const Registration = () => {
  return (
    <Form>
      <FormTitle>Регистрация</FormTitle>
      <Inputs>
        <FormInput placeholder="Ваш email" />
        <FormInput placeholder="Пароль" />
        <FormInput placeholder="Повтор пароля" />
      </Inputs>
      <FormBtn title="Зарегистрироваться" />
      <FormLink title="Вернуться к входу" to="/" />
    </Form>
  );
};

export default Registration;
