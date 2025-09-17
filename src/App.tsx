import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "./utils/Themes"
import Nav from "./components/nav/Nav"
import { BrowserRouter } from "react-router"
import HeroSection from "./components/heroSection/HeroSection"
import Skils from "./components/skils/Skils"
import Experience from "./components/experience/Experience"
import "./App.css"
import Project from "./components/projects/Project"
import Contact from "./components/contact/Contact"
import Stars from "./components/canvas/Stars"
import { Toaster } from "react-hot-toast"
import Footer from "./components/footer/Footer"
const Body = styled.div`
    background-color : ${({ theme }) => theme.bg};
    color : ${({ theme }) => theme.text_primary};
    width:100%;
    position:relative;
`
function App() {
  return (
    <>
    <Toaster />
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Nav />
          <Body>
            <Stars />
            <div>
              <HeroSection />
              <Skils />
              <Project />
              <Experience />
              <Contact />
              <Footer/>
            </div>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
export default App