import styled from "styled-components";

export const Label = styled.label`
  padding: 0.4rem;
  input {
    border: none;
    background-color: transparent;
    width: 100%;
    color: ${(props) => (props.error ? "red" : "white")};
  }
  input:focus {
    outline: none;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => (props.error ? "red" : "whitesmoke")};
    width: 100%;
    height: 0.03rem;
    top: 100%;
    left: 0;
  }

  &:focus-within::after {
    background-color: #28ec96;
  }
`;
