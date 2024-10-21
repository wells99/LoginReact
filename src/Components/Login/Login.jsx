import { useState } from "react";
import {FaUser, FaLock} from "react-icons/fa";
import "./Login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
   
    alert("Enviando dados: " + username + " - " + password)
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input type="email" placeholder='seu@email.com' 
          onChange={(e) => setUsername(e.target.value)} required/>
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input type="password" placeholder='insira sua senha' 
          onChange={(e) => setPassword(e.target.value)} required/>
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
          <input type="checkbox" />
          Lembrar login
          </label>
          <a href="#">Recuperar a senha</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>Não tem uma conta?<a href="#"> Registrar</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login