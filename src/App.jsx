import "./App.css"
// import { Main } from "./components/Main"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { QuillEditor } from "./components/QuillEditor"
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  return (
    <>
      <Header />
      {/* <Main /> */}
      <QuillEditor />
      <Footer />
      <SpeedInsights />
    </>
  )
}

export default App
