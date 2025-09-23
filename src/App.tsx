import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Nav from "./components/nav/Nav";
import { BrowserRouter } from "react-router";
import HeroSection from "./components/heroSection/HeroSection";
import Skils from "./components/skils/Skils";
import Experience from "./components/experience/Experience";
import "./App.css";
import Contact from "./components/contact/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";
import Project from "./components/projects/Project";
import  { Suspense, useEffect, useState } from "react";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  position: relative;
`;

// Hook detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return isMobile;
};

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <Toaster />
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Nav />
          <Body>
            {!isMobile && (
              <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
              </Suspense>
            )}
            <div>
              <HeroSection />
              <Skils />
              <Project />
              <Experience />
              <Contact />
              <Footer />
            </div>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
