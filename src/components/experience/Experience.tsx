import styled from "styled-components";
import { education } from "../../data/constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import React, { useEffect, useState, Suspense, memo } from "react";

// Lazy load EarthCanvas
const EarthCanvas = React.lazy(() => import("../canvas/Earth"));

interface IProps {
  education: {
    name: string;
    img: string;
    date: string;
    degree: string;
    desc: string;
  };
}

const Top = styled.div`
  display:flex;
  gap:12px;
  width:100%;
`;

const Body = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`;

const Image = styled.img`
  height:50px;
  border-radius:10px;
  object-fit:cover;
  @media(max-width:768px){
    height:40px;
  }
`;

const Name = styled.div`
  font-size:14px;
  font-weight:500;
  color: ${({ theme }) => theme.text_secondary + "99"};
  @media(max-width:768px){
    font-size:12px;
  }
`;

const Degree = styled.div`
  font-size:18px;
  font-weight:600;
  color: ${({ theme }) => theme.text_primary + "99"};
  @media(max-width:768px){
    font-size:14px;
  }
`;

const Date = styled.div`
  font-size:12px;
  font-weight:400;
  color: ${({ theme }) => theme.text_secondary + "80"};
  @media(max-width:768px){
    font-size:10px;
  }
`;

const Description = styled.div`
  font-size:15px;
  font-weight:400;
  color: ${({ theme }) => theme.text_primary + "99"};
  margin-bottom:10px;
  @media(max-width:768px){
    font-size:12px;
  }
`;

const Span = styled.span`
  display:-webkit-box;
  overflow:hidden;
  max-width:100%;
`;

const ExperienceCard = ({ education }: IProps) => {
  return (
    <VerticalTimelineElement
      icon={<img width="100%" height="100%" src={education.img} alt={`${education.name} logo`} style={{borderRadius:"50%",objectFit:"cover"}} loading="lazy" decoding="async"/>}
      contentStyle={{
        display:"flex",
        flexDirection:"column",
        gap:"12px",
        background:"rgba(37,25,40,0.83)",
        color:"#fff",
        boxShadow:"rgba(32,92,230,0.15) 0px 4px 24px",
        border:"1px solid rgba(255,255,255,0.125)",
        borderRadius:"6px"
      }}
      contentArrowStyle={{ borderRight:"7px solid rgba(255,255,255,0.3)" }}
      date={education.date}
    >
      <Top>
        <Image src={education.img} alt={education.name} loading="lazy" decoding="async" />
        <Body>
          <Degree>{education.degree}</Degree>
          <Name>{education.name}</Name>
          <Date>{education.date}</Date>
        </Body>
      </Top>

      {education.desc && (
        <Description><Span>{education.desc}</Span></Description>
      )}
    </VerticalTimelineElement>
  );
};

const ExperienceCardMemo = memo(ExperienceCard);

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Wrapper = styled.div`
  max-width:1100px;
  width:100%;
  display:flex;
  flex-direction:column;
  gap:12px;
`;

const Title = styled.div`
  font-size:52px;
  font-weight:600;
  text-align:center;
  margin-top:20px;
  color:${({ theme }) => theme.text_primary};
  @media(max-width:768px){ font-size:32px; margin-top:12px; }
`;

const Desc = styled.div`
  font-size:18px;
  font-weight:600;
  text-align:center;
  color:${({ theme }) => theme.text_secondary};
  margin-bottom:48px;
  @media(max-width:768px){ font-size:16px; margin-top:12px; }
`;

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const handleResize=()=> setIsMobile(window.innerWidth<768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return ()=> window.removeEventListener("resize", handleResize);
  },[]);

  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>My work experience as a software engineer and work companies and projects</Desc>
        <VerticalTimeline>
          {education.map((item, idx)=>(
            <ExperienceCardMemo key={idx} education={item}/>
          ))}
        </VerticalTimeline>
        {!isMobile && (
          <Suspense fallback={<div style={{minHeight:"300px"}}/>}>
            <EarthCanvas />
          </Suspense>
        )}
      </Wrapper>
    </Container>
  );
};

export default Experience;
