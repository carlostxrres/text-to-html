import "./App.css"
// import { Main } from "./components/Main"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { QuillEditor } from "./components/QuillEditor"

const App = () => {
  return (
    <>
      <Header />
      {/* <Main /> */}
      <QuillEditor />
      <Footer />
    </>
  )
}

export default App
