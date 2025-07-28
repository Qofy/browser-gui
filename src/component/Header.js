import Logo from "../images/logo.svg"
import Moon from "../images/icon-moon.svg"
import "../styles/header.css"
function Header() {
  return (
    <div>
    <header className="extension-header">
    <img src={Logo} alt="logo"/>

<button className="change-color toggle-color">
    <img src={Moon} alt="logo"/>
</button>

    </header>
    </div>
  )
}

export default Header