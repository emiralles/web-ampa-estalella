import "./login.css";

import logo from "./images/LOGO ESTALELLA COLORS.jpg";

function Login() {
    return( 
        <>
            <header className="App-header">
            </header>
            <body className="text-center">
                <main className="form-signin">
                    <form>
                        <img className="mb-4" src={logo} alt="" width="72" height="57"/>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2020–2022</p>
                    </form>
                </main>
            </body>
            
        </> 
    );
}

export default Login;