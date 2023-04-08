import Logo from "./Logo";
import s from "./Header.module.css"
import ButtonYellowAnchor from "../../Common/Buttons/ButtonAnchor";


function Header() {
  return (
    <header className={s.header_container}>
      <div className={s.app_header}>
      <Logo></Logo>
      <nav className={s.buttons}>
        <ButtonYellowAnchor buttonName="Users" anchor="users"></ButtonYellowAnchor>
        <ButtonYellowAnchor buttonName="Sign up" anchor="register"></ButtonYellowAnchor>
      </nav>
      </div>
      

    </header>

  );
}

export default Header;

