import axios from "axios";
import { firebase } from "../Config";

const loginGoogleController = "v1/accounts:signInWithIdp";
const authApi = axios.create({ baseURL: firebase.auth_url });

const loginGoogleAsync = async (oAuthToken) => {

  try {
    const bodyRequest = {
      "postBody": `id_token=${oAuthToken}&providerId=google.com`,
      "requestUri": "http://localhost:3000/",
      "returnIdpCredential": true,
      "returnSecureToken": true
    };
    const result = await authApi.post(`${loginGoogleController}?key=${firebase.api_key}`, bodyRequest);

    if (result.status === 200) {
      const { idToken, refreshToken, localId, ...userProfile } = result.data;

      sessionStorage.setItem("idToken", idToken);
      sessionStorage.setItem("localId", localId);
      sessionStorage.setItem("refreshToken", refreshToken);

      return {
        ok: true,
        data: userProfile,
        message: "Te has registrado correctamente."
      };
    }
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      data: {}
    }
  }
};

export {
  loginGoogleAsync
};

