import "./Header.css"
import { DialogButton } from "./DialogButton"
import { FancyText } from "./FancyText"
// import Typography from "@mui/material/Typography"

export function Footer() {
  const INCLUDE_LINKS = false
  const footerButtons = [
    {
      name: "Terms",
      paragraphs: [
        "Hola!",
        "Esto son los términos y condiciones de uso de la web.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam.",
      ],
    },
    {
      name: "Privacy",
      paragraphs: [
        "Hola!",
        "Esto es la política de privacidad de la web.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam.",
      ],
    },
  ]

  return (
    <footer>
      <span>
        Made by{" "}
        <a
          href="https://github.com/carlostxrres"
          target="_blank"
          rel="noopener noreferrer"
          className="discrete-anchor"
        >
          carlostxrres
        </a>
      </span>
      {INCLUDE_LINKS && (
        <ul className="wrapper">
          {footerButtons.map(({ name, paragraphs }, index) => {
            return (
              <li key={index}>
                <DialogButton
                  dialogTitle={name}
                  buttonText={name}
                  dialogText={<FancyText paragraphs={paragraphs} />}
                />
              </li>
            )
          })}
        </ul>
      )}
    </footer>
  )
}
