import "../common/types";
import axios from "axios";

import {UserData} from "../common/types";

const log = require('loglevel');
log.setDefaultLevel("INFO")

//TODO: Change URL to .env URL
// const url = process.env.REACT_SERVER_URL;
// const url = "https://gg-database-server.herokuapp.com"
const url = "http://localhost:7020"
const services = {
  checkForServer: async () => {
    return axios
      .get(`${url}/health`)
      .then((res) => {
        return res.data.toJSON();
      })
      .catch((err) => {
        log.error(err)
      })
  },
  
  registerUser: async (user: UserData) => {
    let result =
      await axios.post(`${url}/user/auth/signup`, user)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          log.error(err)
        })
    return result;
  },
  
  //TODO: if business ID is null implement an error page
  getAuthentication: async (email: string, password: string) => {
    let result =
      await axios.post(`${url}/user/auth/login`,
        {
          email: email,
          password: password
        }
        // ,
        // { withCredentials: true}
        )
        .then((res) => {
          return res.data;
        })
        .catch((err: any) => {
          log.error(err)
        })
    return result;
  },
  
  getBusiness: async (businessId: string) => {
    let result: any;
    result =
      axios.get(`${url}/business/${businessId}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          log.error(err)
        })
    return result;
  },
  createBusiness: async () => {
  },
  updateBusiness: async (businessId: number) => {
  },
  deleteBusiness: async (businessId: number) => {
  }
}

export default services