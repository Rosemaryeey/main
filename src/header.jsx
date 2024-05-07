import logo from "/public/vite.svg";
import "./styles/header.css";
import Button from "./components/Button"


function Header(){
    const buttonName ="Get Started"
    
    return (
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
          <a href="#">BLOG</a>
          <a href="#">GALLERY</a>
          <Button name={buttonName} bg={"bg-blue-500"} />
          <Button name={"login"} bg={"bg-blue-500"} />
        </nav>
      </header>
    );
}
export default Header;