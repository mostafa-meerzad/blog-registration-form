import styled from "styled-components";

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
&:hover, &:focus{
  outline: none;
  box-shadow: 0 0 5px #28ec96;
}
  &:active{
    transform: scale(.98);
  }

`;
