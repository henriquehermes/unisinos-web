import axios from "axios";

const api = axios.create({
	baseURL: "https://pi2-backend.herokuapp.com/",
});

export default api;
