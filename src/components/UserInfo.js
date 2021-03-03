import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { useHistory } from "react-router-dom";

const GetUserInfo = (props) => {
	const [userData, setUserData] = useState({});
	const history = useHistory();

	const logout = () => {
		localStorage.clear("token");
		history.push("/");
	};
	useEffect(() => {
		axiosWithAuth()
			.get("/users/getuserinfo")
			.then((res) => {
				console.log(res.data);
				setUserData(res.data)
			})
			.catch((err) => {
				debugger;
			});
	}, []);

	return (
		<>
	
		</>
	);
};

export default GetUserInfo;
