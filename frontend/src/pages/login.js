import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import APIService from "../utils/apiService";
import { useHistory } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      return;
    }

    try {
      const { token, user } = await APIService.login(email, password);
      localStorage.setItem("token", token);
      localStorage.setItem("userid", user._id);

      setTimeout(() => history.push("/"), 1500);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRegister = () => {
    try {
      setTimeout(() => history.push("/register"), 1500);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <CssBaseline />
      <Typography variant="h5" align="center">
        Fazer Login
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container style={{ maxWidth: "500px" }}>
          <form style={{ width: "100%" }}>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                autoComplete="email"
                autoFocus
                placeholder="Email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                autoComplete="current-password"
                placeholder="Senha"
                fullWidth
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              disableElevation
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Fazer login
            </Button>
            <Button
              type="register"
              fullWidth
              disableElevation
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Fazer cadastro
            </Button>
          </form>
        </Grid>
      </div>
    </>
  );
};

export default Login;
