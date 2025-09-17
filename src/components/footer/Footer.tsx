import styled from "styled-components";
import { Bio } from "../../data/constants";
import { FacebookRounded, GitHub, LinkedIn } from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative; 
  z-index: 10;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease-in-out;

  svg {
    font-size: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Copyright = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ramadan Mohamed</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </Nav>
        <SocialMedia>
          <SocialMediaIcon
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookRounded />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </SocialMediaIcon>
        </SocialMedia>
        <Copyright>
          &copy; 2025 Ramadan Mohamed. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
