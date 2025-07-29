import Logo from "../images/logo.svg"
import Moon from "../images/icon-moon.svg"
import Sun from "../images/icon-sun.svg"
import { useEffect, useState } from "react"
import "../styles/header.css"

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [theme, setTheme] = useState("dark"); 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <header className="extension-header">
        <img src={Logo} alt="logo" />
        <button className="change-color toggle-color" onClick={handleThemeToggle}>
          <img src={theme === "light" ? Moon : Sun} alt={theme === "light" ? "sun" : "moon"} />
        </button>
      </header>
    </div>
  );
}

export default Header