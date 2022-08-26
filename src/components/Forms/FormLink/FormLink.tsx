import styled from "styled-components";
import { Link } from "react-router-dom";

const FormLinkStyled = styled.a`
  font-size: 10px;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
`;

interface FormLinkProps {
  title: string;
  to: string;
}

const FormLink = ({ title, to }: FormLinkProps) => {
  return (
    <FormLinkStyled as={Link} to={to}>
      {title}
    </FormLinkStyled>
  );
};

export default FormLink;
