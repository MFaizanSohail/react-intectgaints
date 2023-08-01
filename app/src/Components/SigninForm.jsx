import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const SigninForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passError, setPassError] = useState(false);
    const [emailError, setEmailError] = useState(false);


	const handleSubmit = (e) => {
		e.preventDefault();
		
        if (!validateEmail(email)) {
            setEmailError(true);
            return;
          }

        if (password.length < 8) {
			setPassError(true);
			return;
		}
		console.log("Email:", email);
		console.log("Password:", password);
	};

    const validateEmail = (input) => {
        return /\S+@\S+\.\S+/.test(input);
      };

	return (
		<Container component="main" maxWidth="xs">
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: "8px 0px",
				}}
			>
				<Typography variant="h5">Sign In</Typography>
				<form onSubmit={handleSubmit}>
					<TextField
						fullWidth
                        required
						variant="outlined"
						label="Email"
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							setEmailError(false);
						}}
                        error={emailError}
						style={{ margin: "8px" }}
					/>
					<TextField
						fullWidth
                        required
						variant="outlined"
						label="Password"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							setPassError(false);
						}}
						error={passError}
						helperText={
							passError
								? "Password must be at least 8 characters"
								: ""
						}
						style={{ margin: "8px 0px" }}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						style={{ margin: "24px 0 16px" }}
					>
						Sign In
					</Button>
				</form>
			</div>
		</Container>
	);
};

export default SigninForm;
