import styled from "styled-components";
import { Bio } from "../../data/constants";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import React, { Suspense, useEffect, useState, memo } from "react";

const HeroBgAnimation = React.lazy(() => import("../../HeroBgAnimation"));

// Hook to detect mobile once
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return isMobile;
};

/* ---------------- Styled Components ---------------- */
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
    clip-path: none;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;

  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 16px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 4px;
    line-height: 28px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SupTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => `${theme.text_primary}95`};

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
  }
`;

const ResumemButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  background: ${({ theme }) => theme.primary};
  color: white;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    padding: 12px 0;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.primary};
  
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  justify-content: end;
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

/* ---------------- Memoized Typewriter ---------------- */
const TypewriterText = memo(() => {
  const [text] = useTypewriter({
    words: Bio.roles,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <Span>
      {text}
      <Cursor cursorStyle="|" />
    </Span>
  );
});

/* ---------------- Component ---------------- */
const HeroSection = () => {
  const isMobile = useIsMobile();



  return (
    <div id="about">
      <HeroContainer>
        {!isMobile && (
          <HeroBg>
            <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
              <HeroBgAnimation />
            </Suspense>
          </HeroBg>
        )}

          <div className="fade-in">
          <HeroInnerContainer>
            <HeroLeftContainer>
              <div className="slide-up delay-1">
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a <TypewriterText />
                </TextLoop>
              </div>
              <div className="slide-up delay-2">
                <SupTitle>{Bio.description}</SupTitle>
                <div>
                  
                </div>
              </div>
              <ResumemButton href="https://drive.google.com/file/d/1WOnT3yOzpymSe3w1SsmqLXtnBOXtwZmi/view?usp=sharing" target="_blank">Check Resume</ResumemButton>
            </HeroLeftContainer>

            <HeroRightContainer>
              <HeroImageWrapper>
                <StyledImage
                  src="/images/heroImg-small.webp"
                  srcSet="/images/heroImg-small.webp 480w, /images/heroImg.webp 1080w"
                  sizes="(max-width: 600px) 480px, 1080px"
                  alt="photo"
                  loading="eager"
                  decoding="async"
                />
              </HeroImageWrapper>
            </HeroRightContainer>
          </HeroInnerContainer>
          </div>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
