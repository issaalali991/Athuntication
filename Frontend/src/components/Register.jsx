import { useState } from "react";
import Form from "./Form";
import { useCookies } from "react-cookie"

import { createUser } from "../usersLogic";

function Register() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [_,setCookie] = useCookies(['access_token']);
  const onSubmit =  (e) => {
    e.preventDefault();
    createUser(user,pass,setCookie);
  }
  return (
    <>
     <Form 
        title="Register"
        user={user}
        pass={pass}
        setUsername={setUser}
        setPassword={setPass}
        onSubmit={onSubmit}        
      />
    </>
  )
}

export default Register
