
import axios from "axios";


export const getUser = async (
  user,
  pass,
  setCookie

) => {
  try {
    const res = await axios.post("https://authentication-form-u8no.onrender.com/users/login", {
      user_name: user,
      password: pass,
    });
    setCookie('access_token',res.data.token);
    window.localStorage.setItem('userID', res.data.id);
    window.localStorage.setItem('user', user);
    console.log(res.data);
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      alert(error.response.data.message);
    } else if (error.request) {
      console.error("No response received from the server.");
      alert("No response received from the server.");
    } else {
      console.error("Error setting up the request:", error.message);
      alert("Error setting up the request.");
    }
  }
};
 export const createUser = async (
  user,
  pass,
  setCookie
) => {
  try {
    const res = await axios.post("https://authentication-form-u8no.onrender.com/users/register", {
      user_name: user,
      password: pass,
    });
    const {token,id,message} = res.data;
    setCookie('access_token',token);
    window.localStorage.setItem('userID', id);
    res.data.message==="User created successfully" && (
      alert(message),
      getUser(user,pass,setCookie)

    );
     
  } catch (error) {
    console.error("Error creating user:", error);

    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      alert(error.response.data.message);
    } else if (error.request) {
      console.error("No response received from the server.");
      alert("No response received from the server.");
    } else {
      console.error("Error setting up the request:", error.message);
      alert("Error setting up the request.");
    }
  }
};

