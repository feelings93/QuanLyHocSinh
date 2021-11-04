import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useHttp from "../hooks/use-http";
import { login } from "../lib/api";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const { sendRequest, status, data, error } = useHttp(login);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const loginFormHandler = async (event) => {
    event.preventDefault();
    let request = {
      email: enteredEmail,
      password: enteredPassword,
    };
    sendRequest(request);
  };
  if (status === "pending") return <h2>Đang đăng nhập...</h2>;
  if (data) localStorage.setItem("accessToken", data["access_token"]);
  else localStorage.removeItem("accessToken");
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Paper
        sx={{
          margin: "auto",
          maxWidth: "300px",
          transform: "translateY(50%)",
        }}
      >
        <form onSubmit={loginFormHandler}>
          <Stack sx={{ padding: "24px" }} spacing={2}>
            <Typography sx={{ fontWeight: 700 }}>Đăng nhập</Typography>
            <TextField
              onChange={(event) => {
                setEnteredEmail(event.target.value);
              }}
              value={enteredEmail}
              id="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              onChange={(event) => {
                setEnteredPassword(event.target.value);
              }}
              value={enteredPassword}
              id="password"
              label="Mật khẩu"
              type="password"
              variant="outlined"
            />
            <Button size="large" type="submit" variant="contained">
              {status === "pending" ? <CircularProgress /> : <></>}
              Đăng nhập
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
