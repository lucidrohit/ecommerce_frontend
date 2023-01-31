import {
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const LogIn = () => {
  return (
    <Stack alignItems="center" justifyContent="center" minHeight="60vh">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitted");
        }}
      >
        <FormGroup
          sx={{
            width: "30vw",
            minHeight: "400px",
            minWidth: "280px",
            padding: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            border: "1px solid",
            borderColor: "#0c831f",
          }}
        >
          <Typography variant="h4" fontWeight={600} color="#0c831f" mb={2}>
            Log In
          </Typography>
          <TextField
            defaultValue="Hello World"
            required
            type="email"
            label="Email"
            sx={{
              mb: 2,
            }}
          />
          <TextField
            defaultValue="Hello World"
            required
            type="password"
            label="Password"
            sx={{
              mb: 2,
            }}
          />

          <Button
            type="submit"
            variant="outlined"
            sx={{
              color: "#0c831f",
              border: "1px solid #0c831f",
              "&:hover": {
                backgroundColor: "rgba(12,131,31,0.1)",
                border: "1px solid #0c831f",
              },
            }}
          >
            Submit
          </Button>
          <Stack direction="row" justifyContent="end">
            <Typography variant="subtitle1" fontWeight={300} color="#0c831f">
              Forgot Password?
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                pl: 1,
                cursor: "pointer",
              }}
            >
              Chick Here!
            </Typography>
          </Stack>
        </FormGroup>
      </form>
    </Stack>
  );
};

export default LogIn;