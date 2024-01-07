import "./Header.css"
import { DialogButton } from "./DialogButton"
import { FancyText } from "./FancyText"
import { FooterAnchor } from "./FooterAnchor"
// import Typography from "@mui/material/Typography"

export function Footer() {
  const INCLUDE_LINKS = false
  const footerButtons = [
    {
      name: "About",
      paragraphs: [
        "Hola!",
        "Explicación de la web.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam.",
      ],
    },
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
        <FooterAnchor
          prevText="Made by"
          anchorText="carlostxrres"
          href="https://github.com/carlostxrres"
        />
      </span>
      <span>
        <FooterAnchor
          prevText="See project in"
          anchorText="GitHub"
          href="https://github.com/carlostxrres/text-to-html"
        />
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
