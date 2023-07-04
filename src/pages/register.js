import React from "react";
import axios from "axios";

export default function Register() {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.post("/api/register", {
			username,
			password,
		});
		console.log(res.data);
	};

	return (
		
	);
}
