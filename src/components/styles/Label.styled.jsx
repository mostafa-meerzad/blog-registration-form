import styled from "styled-components";

export const Label = styled.label`
padding: .4rem;
  input {
    border: none;
    background-color: transparent;
    width: 100%;
    color: white;
  }
  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => (props?.error ? "red" : "whitesmoke")};
    width: 100%;
    height: .03rem;
    top: 100%;
    left: 0;
  }
`;
