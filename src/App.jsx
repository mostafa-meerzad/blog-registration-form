import { Form } from "./components/styles/Form.styled";
import { Title } from "./components/styles/FormTitle.styled";
import { Label } from "./components/styles/Label.styled";
import { Main } from "./components/styles/Main.styled";
import { SubmitBtn } from "./components/styles/SubmitBtn.styled";

import { useForm } from "react-hook-form";
import { TermsOfService } from "./components/styles/TermsOfService";

const App = () => {
  const { handleSubmit, register, error } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Main>
      <Title> Registration Form</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="fullName">
          <input
            id="fullName"
            autoComplete="true"
            placeholder="Full Name"
            {...register("fllName", { required: true, maxLength: 50 })}
          />
        </Label>
        <Label htmlFor="userName">
          <input
            id="userName"
            autoComplete="true"
            placeholder="User Name"
            {...register("userName", { required: true, maxLength: 50 })}
          />
        </Label>
        <Label htmlFor="userEmail">
          <input
            id="userEmail"
            placeholder="Email Address"
            type="email"
            {...register("userEmail")}
          />
        </Label>
        <Label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: 100,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            })}
          />
        </Label>
        <Label htmlFor="confirmPassword">
          <input
            id="confirmPassword"
            type="password"
            placeholder="Conform Password"
            {...register("confirmPassword", {
              required: true,
              maxLength: 100,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            })}
          />
        </Label>
        <SubmitBtn>Submit</SubmitBtn>
      </Form>
    </Main>
  );
};
export default App;
