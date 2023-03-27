import ButtonYellow from "../../Common/Button";
import Logo from "./Logo";
import s from "./Header.module.css"


function Header() {
  return (
    <header className={s.app_header}>
      <Logo></Logo>
      <nav className={s.buttons}>
        <ButtonYellow buttonName="Users"></ButtonYellow>
        <ButtonYellow buttonName="Sign Up"></ButtonYellow>
      </nav>

    </header>

  );
}

export default Header;

