import style from "./styles/login.module.css";
import Image from "next/image";
import Logo from "../assets/logo.png";

export default function Login() {
  return (
    <div className={style.loginContainer}>
      <div className={style.loginCard}>
        {/* Logo */}
        <div className={style.logoWrapper}>
          <Image className={style.logo} src={Logo} alt="Logo" width={120} height={120} />
        </div>

        {/* Form */}
        <form>
          <label className={style.label} htmlFor="username">Usuário</label>
          <input id="username" type="text" placeholder="Digite seu usuário" className={style.input} />

          <label className={style.label} htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Digite sua senha" className={style.input} />

          <button type="submit" className={style.button}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
