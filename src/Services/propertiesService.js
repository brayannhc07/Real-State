import axios from "axios";
import { firebase } from "../Config/";

const controller = "casas";

const api = axios.create({ baseURL: firebase.db_url });


const getPropertiesAsync = async () => {
  // const localId = sessionStorage.getItem("localId") || '';
  // const idToken = sessionStorage.getItem("idToken") || '';

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

const getPropertyAsync = async (id) => {

  try {
    const result = await api.get(`${controller}/${id}.json`);

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
      message: `[Error] ${error}.`
    }
  }
};


const createPropertyAsync = async (data) => {
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

const occupyPropertyAsync = async (id) => {
  try {
    const result = await api.patch(`${controller}/${id}.json`, { status: 1 });

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

const deletePropertyAsync = async (id) => {
  try {
    const result = await api.delete(`${controller}/${id}.json`);

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
  getPropertiesAsync,
  getPropertyAsync,
  createPropertyAsync,
  occupyPropertyAsync,
  deletePropertyAsync
}


