import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) =>
    props.theme === "primary" 
    ? "none" 
    : "1px solid #fe7e5d"};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    ${(props) => 
    props.theme === "primary"
      ? "opacity: 0.8;"
      : "background: #fe7e5d; color: #fff; box-shadow: 0 0 15px #fe7e5d; "};
  }

  &:active {
    opacity: 0.5;
  }
`;
