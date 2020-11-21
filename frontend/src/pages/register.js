import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import APIService from "../utils/apiService";
import { DatePicker } from "@material-ui/pickers";

const Register = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleNameChange = (event) => setName(event.target.value);
  //const handleDateOfBirthChange = (event) => setDateOfBirth(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      return;
    }

    try {
      const { token, user } = await APIService.register(
        email,
        password,
        name,
        dateOfBirth
      );
      localStorage.setItem("token", token);
      localStorage.setItem("userid", user._id);
      setTimeout(() => history.push("/"), 1500);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <CssBaseline />
      <Typography variant="h5" align="center">
        Crie sua conta
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
                autoComplete="Nome"
                autoFocus
                placeholder="Nome"
                fullWidth
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12} style={{ marginTop: 8 }}>
              <DatePicker
                fullWidth
                required
                disableFuture
                inputVariant="outlined"
                openTo="year"
                format="dd/MM/yyyy"
                placeholder="Data de nascimento"
                value={dateOfBirth}
                onChange={setDateOfBirth}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                autoComplete="E-mail"
                placeholder="E-mail"
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
              Fazer cadastro
            </Button>
          </form>
        </Grid>
      </div>
    </>
  );
};

export default Register;
