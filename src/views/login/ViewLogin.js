import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

//import logo from "./images/LOGO ESTALELLA COLORS.jpg";
import logo from "./images/LOGOTIP AFA DEFINITIU 26052022 VERD.png";
import Mensaje from "../../components/mensaje/Mensaje";
import {useAuth} from "../../context/authContext";

function ViewLogin() {
 
    const [user,setUser] = useState({email:"",password:""});
    const handleChange = ({target:{name,value}}) =>{
        setUser({...user,[name]:value})
    }


    const [mensaje, setMensaje] = useState("");
    
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(user.email,user.password);
            navigate('/admin/index');            
        } catch (error) {
            setMensaje(error.message);
        }
    }

    const exitMensaje = mensaje.length>0;
    return( 
        <>
            <header className="App-header">
            </header>
            <div className="text-center">
                <main className="form-signin">
                    { exitMensaje && <Mensaje mensaje={mensaje}/>}
                    <form onSubmit={handleSubmit}>
                        <a href="/">
                            <img className="mb-4 Logo rounded-circle " src={logo} alt="Logo" width="72" height="72"/>
                        </a>
                        {/* <img className="mb-4" src={logo} alt="" width="72" height="72"/> */}
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleChange}/>
                        <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange}/>
                        <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>
            </div>
            
        </> 
    );
}

export default ViewLogin;