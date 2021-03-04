// code from student Nicholas Myers! Thank you Nicholas!

import axios from "axios";

 const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: `Bearer ${token}`,
		},
		baseURL: "https://tttwentyfour-foundation.herokuapp.com/",
	});
};

export default axiosWithAuth;