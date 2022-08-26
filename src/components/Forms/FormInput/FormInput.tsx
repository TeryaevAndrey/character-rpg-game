import styled from "styled-components";

const FormInputStyle = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 10px 25px;
  background-color: #212a2e;
  box-shadow: 0px 0px 10px rgba(93, 109, 115, 0.25);
  border-radius: 10px;
  font-size: 13px;
`;

interface FormInputProps {
  placeholder: string;
}

const FormInput = ({ placeholder }: FormInputProps) => {
  return <FormInputStyle placeholder={placeholder} />;
};

export default FormInput;
