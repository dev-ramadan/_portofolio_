import { useState, useCallback } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "./ProjectCard";
interface ToggleButtonProps {
  $active?: boolean; 
}
const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:0 16px;
`;

const Wrapper = styled.div`
  max-width:1100px;
  width:100%;
  display:flex;
  flex-direction:column;
  gap:12px;
  align-items:center;
`;

const Title = styled.div`
  font-size:52px;
  text-align:center;
  font-weight:600;
  color:${({ theme }) => theme.text_primary};
  margin-top:20px;
`;

const Desc = styled.div`
  font-size:18px;
  text-align:center;
  font-weight:600;
  color:${({ theme }) => theme.text_secondary};
  margin-bottom:40px;
`;

const ToggleButtonGroup = styled.div`
  display:flex;
  border:1.5px solid ${({ theme }) => theme.primary};
  border-radius:12px;
  color:${({ theme }) => theme.primary};
  font-weight:500;
  margin:22px 0;
`;

const ToggleButton = styled.div<ToggleButtonProps>`
  padding:8px 18px;
  border-radius:6px;
  cursor:pointer;
  transition:all 0.3s ease;
  ${({ $active, theme }) => $active && `background:${theme.primary}20;color:white;`}
`;

const Divider = styled.div`
  width:1.5px;
  background:${({ theme }) => theme.primary};
`;

const CartContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:28px;
`;

const Project = () => {
  const [toggle, setToggle] = useState("all");
  const handleToggle = useCallback((category: string) => setToggle(category), []);

  const filteredProjects =
    toggle === "all" ? projects : projects.filter(p => p.category === toggle);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>I have worked on a wide range of projects, from web apps. Here are some of my projects.</Desc>

        <ToggleButtonGroup>
          <ToggleButton $active={toggle==="all"} onClick={()=>handleToggle("all")}>ALL</ToggleButton>
          <Divider/>
          <ToggleButton $active={toggle==="js"} onClick={()=>handleToggle("js")}>JavaScript</ToggleButton>
          <Divider/>
          <ToggleButton $active={toggle==="react"} onClick={()=>handleToggle("react")}>React</ToggleButton>
        </ToggleButtonGroup>

        <CartContainer>
          {filteredProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </CartContainer>
      </Wrapper>
    </Container>
  );
};

export default Project;
