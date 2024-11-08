import { CHECK_TOKEN_URL } from "@/util/constants";
import { LOGIN_URL } from "@/util/constants";

export const addBearerTokenToData = (data, token) => {
    // Assume we have an accessToken ready.
    data["Authorization"] = "Bearer " + token;
    return data
}

export const checkTokenWithServer = async (token) => {
    // Assume we have accessToken ready.
    const headers = addBearerTokenToData({}, token);
    const response = await fetch(CHECK_TOKEN_URL, {method: 'POST', headers});
    return response.ok
}

export const tryLogin = async (username, password) => {
    const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
    return response
}