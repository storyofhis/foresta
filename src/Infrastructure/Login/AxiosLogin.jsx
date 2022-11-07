// import axios, { AxiosResponse } from 'axios'
import axios from "axios";
class AxiosLogin {
  static async request(email, password, callback = () => {}) {
    const config = {
      method: "post",
      headers: {
        "App-Key": "http://localhost:8080/v1",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      url: "/users/login",
      data: {
        email,
        password,
      },
    };
    await axios(config).then(callback, (error) => {
      console.log(error);
    });
  }
}

export default AxiosLogin;
