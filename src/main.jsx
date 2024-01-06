import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import "./index.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#e2777a",
    },
    secondary: {
      main: "#03a9f4",
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
