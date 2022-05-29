import axios from "axios";
import { firebase } from "../Config/";

const controller = "solicitudes";

const api = axios.create({ baseURL: firebase.db_url });


const getRequestsAsync = async () => {

  try {
    const result = await api.get(`${controller}.json`);

    if (result.status === 200) {
      let properties = [];

      if (result.data) {
        properties = Object.keys(result.data).map((value) => {
          return {
            id: value,
            ...result.data[value]
          };
        });
      }

      return {
        ok: true,
        data: properties,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: `[Error] ${error}.`
    }
  }
};

const createRequestAsync = async (data) => {
  // const localId = sessionStorage.getItem("localId") || '';
  // const idToken = sessionStorage.getItem("idToken") || '';

  try {
    const result = await api.post(`${controller}.json`, data);

    if (result.status === 200) {

      return {
        ok: true,
        data: result.data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Erorr."
    }
  }
};

const approveRequestAsync = async (id, user) => {

  try {
    const req = {
      status: 1,
      approveUser: user,
      approveTime: new Date()
    };
    const result = await api.patch(`${controller}/${id}.json`, req);

    if (result.status === 200) {

      return {
        ok: true,
        data: result.data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Erorr."
    }
  }
};

const rejectRequestAsync = async (id, user) => {

  try {
    const req = {
      status: 2,
      rejectUser: user,
      rejectTime: new Date()
    }
    const result = await api.patch(`${controller}/${id}.json`, req);

    if (result.status === 200) {

      return {
        ok: true,
        data: result.data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Erorr."
    }
  }
};

export {
  getRequestsAsync,
  createRequestAsync,
  approveRequestAsync,
  rejectRequestAsync
}

