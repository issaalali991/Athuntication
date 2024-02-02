
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { Cookies, useCookies } from "react-cookie";

function App() {
  const[cookies, setCookie, removeCookie] = useCookies(['access_token']);
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500 ">
        
        {
          localStorage.getItem('user')? (' Welcome, ' + localStorage.getItem('user') + '!') :'Hello world!'
        }
       
      </h1>
       
      <br />
    
      {
        cookies.access_token ? 
        <button 
          className="bg-red-500 text-white rounded-md px-2 py-1 mt-3
          hover:bg-red-600 transition ml-12"
          onClick={() => {removeCookie('access_token')
          window.localStorage.removeItem('userID')
          window.localStorage.removeItem('user')
          window.location.reload()
        }}
        >
          Logout
        </button>
        : 
        (
          <>
          
          <Register/>
          <br />
          <Login/>
          </>
        )
      }
     
    </>
  );
}

export default App;
