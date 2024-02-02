import { useState } from "react";
import { useCookies } from "react-cookie"
import Form from "./Form";
import {getUser} from "../usersLogic";


function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [_,setCookie] = useCookies(['access_token']);
  const onSubmit = async (e) => {
    e.preventDefault();
getUser( user,pass,setCookie);  
  };

  return (
    <>
      <Form
        title="Login"
        user={user}
        pass={pass}
        setUsername={setUser}
        setPassword={setPass}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Login;
