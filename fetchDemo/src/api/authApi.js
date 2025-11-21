import axios from "axios";

const BASEURL = "https://cloud9bet.dk"; // Replace with your real endpoint
// const BASEURL = "https://localhost:7203/";
const AuthApi = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// register
export async function register(userName, password) {
  try {
    const response = await AuthApi.post("/Auth/register", {
      userName,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Register failed:", error);
    throw error;
  }
}

// --- LOGIN FUNCTION ---
export async function login(userName, password) {
  try {
    const response = await AuthApi.post("/Auth/login", {
      userName,
      password,
    });

    const { jwTtoken, refreshToken } = response.data;
    console.log(jwTtoken);
    console.log(refreshToken);

    // Store tokens safely
    sessionStorage.setItem("accessToken", jwTtoken);
    sessionStorage.setItem("refreshToken", refreshToken);

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

// --- REFRESH FUNCTION ---


export async function refresh() {
  try {
        const refreshToke = sessionStorage.getItem("refreshToken");
        const response = await AuthApi.post("/Auth/refresh", null, {params: {refreshToken: refreshToke}});

        const { jwTtoken, refreshToken } = response.data;

        sessionStorage.setItem("accessToken", jwTtoken); // Update the access token in local storage
        sessionStorage.setItem("refreshToken", refreshToken); // Update the refresh token in local storage

        console.log(jwTtoken);
        console.log(refreshToken);
        return response.data;
  }
  catch (error) {
    console.error("refresh failed:", error);
    throw error;
  }
}
