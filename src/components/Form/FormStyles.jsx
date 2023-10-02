import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.2rem;
`;

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

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 0.6rem;
  margin-block-start: 2rem;
  border: none;
  border-radius: 0.5rem;

  font-size: medium;
  text-align: center;

  background-image: linear-gradient(90deg, #28ec96, #0bb6e0);

  transition: transform ease-in 100ms;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #28ec96;
  }
  &:active {
    transform: scale(0.98);
  }
`;
