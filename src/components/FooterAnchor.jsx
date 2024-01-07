export function FooterAnchor({ prevText, anchorText, href, nextText }) {
  return (
    <>
      {prevText}{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="discrete-anchor"
      >
        {anchorText}
      </a>
      {nextText}
    </>
  )
}
