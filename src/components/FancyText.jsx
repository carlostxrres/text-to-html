import Typography from "@mui/material/Typography"

export function FancyText({ paragraphs }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <Typography gutterBottom key={index}>
          {paragraph}
        </Typography>
      ))}
    </>
  )
}
