import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormControl, TextField } from "@mui/material";

import { loginSchema } from "./validations";

import { Button } from "views/styled/button";
import { ButtonOutline } from "views/styled/button/outline";
import { login, loginWithThirdPartyApp } from "modules/auth/actions";
import { AuthThirdPartyAppProvider } from "utils/enums/provider-keys";
import { useAppDispatch } from "store";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    resolver: yupResolver(loginSchema),
  });

  const handleFormSubmit = handleSubmit((data) => {
    dispatch(login(data));
  });

  const handleSignIn = async (provider: AuthThirdPartyAppProvider) => {
    dispatch(loginWithThirdPartyApp(provider));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl>
        <TextField type="text" label="Email" {...register("email")} />
      </FormControl>
      <FormControl>
        <TextField type="password" label="Password" {...register("password")} />
      </FormControl>
      <FormControl>
        <ButtonOutline type="submit">Sign in</ButtonOutline>
        <Button
          type="button"
          onClick={() => handleSignIn(AuthThirdPartyAppProvider.GOOGLE)}
        >
          Sign in with google
        </Button>
        <Button
          type="button"
          onClick={() => handleSignIn(AuthThirdPartyAppProvider.FACEBOOK)}
        >
          Sign in with facebook
        </Button>
      </FormControl>
    </form>
  );
};
