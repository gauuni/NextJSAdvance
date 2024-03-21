import { Box, Button, FormGroup, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { isIOS, isAndroid, isMacOs, isMobile } from 'react-device-detect';

interface User {
  username?: string;
  password?: string;
}
const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<User>({
    username: 'atuny0',
    password: "9uQFF1Lh"
  });

  const validateForm = () => { };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      password: e.currentTarget.value
    });
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      username: e.currentTarget.value
    });
  };

  const onLogin = () => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: form.username,
        password: form.password
      })
      .then((res) => {
        setCookie("sessionId", true);
        router.push("/cart");
      });
  };

  function helperTextPassword() {
    if (!form.password)
      return ""

    if (form.password.length < 8)
      return "Password is invalid"

    return ""
  }



  return (
    <Box m={4}>
      <FormGroup>
        <Stack gap={4}>
          {/* <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          /> */}
          <TextField
            label="username"
            variant="outlined"
            defaultValue={form.username}
            error={!form.username}
            helperText={!form.username ? "Username is invalid" : ""}
            onChange={onChangeUsername}
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            defaultValue={form.password}
            error={form.password ? !form.password.length : false}
            helperText={helperTextPassword()}
            onChange={onChangePassword}
          />
          <Button
            disabled={!form.username || !form.password}
            variant="contained"
            onClick={onLogin}
          >
            Login
          </Button>
        </Stack>
      </FormGroup>
    </Box>
  );
};

export default LoginPage;
