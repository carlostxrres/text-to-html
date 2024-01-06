import { MainMenu } from "./MainMenu"
import "./Header.css"

export function Header() {
  return (
    <header>
      <span className="wrapper">
        <img src="../../logo3.svg" className="logo" />
        <h1>Text to HTML</h1>
      </span>
      <span>
        <MainMenu />
        {/* See Full-screen dialogs: https://mui.com/material-ui/react-dialog/ */}
      </span>
    </header>
  )
}
