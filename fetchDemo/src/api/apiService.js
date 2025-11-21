

// Request interceptor to add access token to every request
export function requestInceptor(api){
api.interceptors.request.use(
  (config) => {
    const jwtToken = sessionStorage.getItem("accessToken"); // Get access token from the local storage
    
if (jwtToken) { // if access token is present, add it to the bearer-token
      config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }

    return config;
  },

  (error) => { // Error-handling
    console.error("Request error ::", error);
    return Promise.reject(error);
  }
);
};

// Response interceptor to handle 401 and 403 response
export function responseInceptor(api){
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {

// Check if error response is present and error status is 401 or 403
    if (
      error.response &&
      (error.response.status === 401)
    ) {
      console.error("Response error :: ", error.response);

      // fetch new access token
      try {
        const refresh = sessionStorage.getItem("refreshToken");
        const response = await api.post("/Auth/refresh", null, {params: {refreshToken: refresh}});
        const { jwTtoken, refreshToken } = response.data;


        sessionStorage.setItem("accessToken", jwTtoken); // Update the access token in local storage
        sessionStorage.setItem("refreshToken", refreshToken); // Update the refresh token in local storage

        console.log(jwTtoken);
        console.log(refreshToken);

        // Re-try the original request
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${jwTtoken}`;
        return await api(originalRequest);

      } catch (refreshError) {
        // incase of failed refresh, re-direct to login page
       window.location.href = "/City"; //kald logout endpoint og clear storage

// or window.location.href = "/login" if you do not use react-router-dom

        return await Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
}