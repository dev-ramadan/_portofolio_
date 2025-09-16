import { Link as linkR } from "react-router"
import styled, { useTheme } from "styled-components"
import { Bio } from "../../data/constants";
import { MenuRounded } from "@mui/icons-material"
import { useState } from "react";

const NavBar = styled.div`
    background-color : ${({ theme }) => theme.bg};
    height:80px;
    display:flex ;
    align-items:center; 
    justify-content:center;
    font-size:1rem;
    position:sticky;
    z-index:20;
    color:white
`

const Navcontainer = styled.div`
    width:100%;
    max-width:1200px;
    padding: 0 24px;
    height:80px;
    display:flex ;
    align-items:center; 
    justify-content:space-between;
    font-size:1rem;
    `;
const NavLogo = styled(linkR)`
    width:80%;
    padding: 0 6px;
    font-weight:500;
    font-size-18px;
    text-decoration:none;
    color:inherit
    `;
const NavItems = styled.ul`
    width:100%;
    display:flex ;
    align-items:center;
    justify-content:center;
    gap:32px;
    padding: 0 6px;
    list-style:none;
    @media screen and (max-width:768px){
    display:none;
    }
    `;
const NavLink = styled.a`
    
    color : ${({ theme }) => theme.text_primary};
    font-wight:500;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    &:hover{
    color:${({ theme }) => theme.primary}
    }
    `;
const ButtonContainer = styled.div`
    width:80%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:end;
    padding:0 6px;
    @media screen and (max-width:768px){
    display:none;
    }
`;
const GitHupButton = styled.a`
    border : 1px solid ${({ theme }) => theme.primary};
    color : ${({ theme }) => theme.primary};
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 0 20px;
    cursor:pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight:500;
    transition:all 0.6s ease-in-out;
    text-decoration:none;
    &:hover {
    background-color :${({ theme }) => theme.primary};
    color : ${({ theme }) => theme.text_primary};
    }
`;

const MobileIcon = styled.div`
    color : ${({ theme }) => theme.text_primary};
    display:flex;
    align-items-center;
    display:none;
    cursor:pointer;
    @media screen and (max-width :768px){
    display:block;
    }
`;

const MobileMenu = styled.ul`
    width:100%;
    display:flex ;
    flex-direction:column;
    align-items:start;
    gap:16px;
    padding: 0 6px;
    list-style:none;
    padding: 12px 40px 24px 40px;
    background : ${({ theme }) => theme.card_light + 99};
    position:absolute;
    top:80px;
    right:0;
    transition:all 0.6s ease-in-out;
    transform: ${(isOpen) =>
        isOpen ? "translateY(0)" : "translateY(-100%)"
    };
    border-radius : 0 0 20px 20px;
    box-shadow : 0 0 10px 0 rgba(0,0,0,0.2);
    opacity: ${(isOpen) => (isOpen ? "100%" : "0")};
    z-index: ${(isOpen) => (isOpen ? "1000" : "-1000")};
`


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    return (
        <>
            <NavBar>
                <Navcontainer>
                    <NavLogo to="/" style={{ color: "white" }}>Ramadan</NavLogo>

                    <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                        <MenuRounded style={{ color: "inherit" }} />
                    </MobileIcon>

                    <NavItems>
                        <NavLink href="#About">About</NavLink>
                        <NavLink href="#Skills">Skils</NavLink>
                        <NavLink href="#Education">Education</NavLink>
                        <NavLink href="#Projects">Projects</NavLink>
                        <NavLink href="#Contact">Contact</NavLink>
                    </NavItems>

                    {isOpen && (
                        <MobileMenu >
                            <NavLink href="#About">About</NavLink>
                            <NavLink href="#skils">Skils</NavLink>
                            <NavLink href="#Experience">Experience</NavLink>
                            <NavLink href="#Projects">Projects</NavLink>
                            <NavLink href="#Contact">Contact</NavLink>
                            <GitHupButton href={Bio.github} target="_Blank" style={{ background: theme.primary, color: theme.text_primary, }}>Githup Profile</GitHupButton>
                        </MobileMenu>
                    )}

                    <ButtonContainer>
                        <GitHupButton href={Bio.github} target="_Blank">Githup Profile</GitHupButton>
                    </ButtonContainer>
                </Navcontainer>
            </NavBar>
        </>
    )
}
export default Nav