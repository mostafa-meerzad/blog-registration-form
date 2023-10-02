import { useForm } from "react-hook-form";
import { Label, SubmitBtn, FormStyled } from "./FormStyles";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="fullName" error={errors.fullName}>
        <input
          id="fullName"
          autoComplete="true"
          placeholder="Full Name"
          {...register("fullName", { required: true, maxLength: 50 })}
        />
      </Label>
      <Label htmlFor="userName" error={errors.userName}>
        <input
          id="userName"
          autoComplete="true"
          placeholder="User Name"
          {...register("userName", { required: true, maxLength: 50 })}
        />
      </Label>
      <Label htmlFor="userEmail" error={errors.userEmail}>
        <input
          id="userEmail"
          placeholder="Email Address"
          type="email"
          {...register("userEmail", { required: true })}
        />
      </Label>
      <Label htmlFor="password" error={errors.password}>
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
      <Label htmlFor="confirmPassword" error={errors.confirmPassword}>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Conform Password"
          {...register("confirmPassword", {
            required: true,
            maxLength: 100,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          })}
          onChange={(e) => {
            let password = getValues("password");
            let confPassword = e.target.value;

            if (password !== confPassword) {
              setError("confirmPassword");
              trigger("confirmPassword");
            }
            clearErrors("confirmPassword");
          }}
        />
      </Label>
      <SubmitBtn>Submit</SubmitBtn>
    </FormStyled>
  );
};

export default Form;
