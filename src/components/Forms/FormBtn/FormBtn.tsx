import styled from "styled-components";

const FormBtnStyle = styled.button`
  display: inline-block;
  width: 100%;
  min-height: 45px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  background-color: #123c0b;
  text-transform: uppercase;
  margin-top: 30px;
  box-shadow: 0px 0px 10px rgba(93, 109, 115, 0.25);
  border-radius: 10px;
`;

interface FormBtnProps {
  title: string;
}

const FormBtn = ({ title }: FormBtnProps) => {
  return <FormBtnStyle type="submit">{title}</FormBtnStyle>;
};

export default FormBtn;
