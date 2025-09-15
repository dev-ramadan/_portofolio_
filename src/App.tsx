import styled , {ThemeProvider} from "styled-components"
import { darkTheme } from "./utils/Themes"
import Nav from "./components/nav/Nav"
import { BrowserRouter } from "react-router"
import HeroSection from "./components/heroSection/HeroSection"

const Body = styled.div`
    background-color : ${({theme}) => theme.bg};
    color : ${({theme}) => theme.text_primary};
    width:100%;
    position:relative;
`
function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <Nav/>
      <Body>
        <HeroSection/>
      </Body>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}
export default App