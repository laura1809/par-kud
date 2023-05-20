import { useState } from "react";
import { useNavigate } from "react-router-dom";



const LoginCard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/Parkings");
  }

  const handleSignUp = () => {
    navigate("/SignUp");
  }

  return (
    <main className="container flex justify-center mx-auto mt-6">
      <article id="userSign" className={`w-1/4 absolute rounded-t-2xl shadow-xl rounded-b-xl bg-blue`}>
        <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1683074778/PAR-KUD/logo_par-kud_mr0zcf.png" alt="Logo de la app" id="appLogo" width="290" height="250"
          className="mx-auto" />

        <form action="" id="userSignIn-form" className="mt-0">
          <div id="form-username" className="flex justify-center">
            <label htmlFor="username"></label>
            <input type="email" name="username" id="username" placeholder="Correo electrónico" value={username} 
              className="w-3/4 mb-6 px-3 py-1 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400"
              onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div id="form-password" className="flex justify-center">
            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder="Contraseña" value={password} 
              className="w-3/4 px-3 py-1 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400"
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <section className="flex justify-center pb-8 mx-10 mt-10 mb-4">
            <input type="button" id="button-signIn" value="Iniciar sesión" onClick={handleLogin}
              className={`w-1/2 px-4 py-2 mr-2 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
                        hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`} />

            <input type="button" id="button-signIn" value="Registrarse" onClick={handleSignUp}
              className={`w-1/2 px-4 py-2 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
                        hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`} />
          </section>
        </form>
      </article>
    </main>
  )
}

export default LoginCard