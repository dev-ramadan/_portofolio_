import styled from "styled-components"
import { education } from "../../data/constants";
import ExperienceCard from "./ExperienceCard";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import EarthCanvas from "../canvas/Earth";
const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    position:relative;
    z-index:1;
    align-items:center;
`;

const Wrapper = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    width:100%;
    max-width:1100px;
    gap:12px;
    @media (max-width:960px){
    flex-direction:column;
    }
`;

const Title = styled.div`
    font-size:52px;
    text-align:center;
    font-weight:600;
    margin-top:20px;
    color:${({ theme }) => theme.text_primary};

    @media (max-width:768px){
        margin-top:12px;
        font-size:32px;
    }
`

const Desc = styled.div`
    font-size:18px;
    text-align:center;
    font-weight:600;
    color:${({ theme }) => theme.text_secondary};
    @media (max-width:768px){
        margin-top:12px;
        font-size:16px;
    }
`;
const Experience = () => {
    return (
        <>
            <Container id="Education">
                <Wrapper>
                    <Title>Education</Title>
                    <Desc style={{ marginBottom: "48px" }}>
                        My work experience as a sofrwerw enginner and work
                        companies and projects
                    </Desc>
                    <VerticalTimeline>
                        {education.map((item, idx) => (
                            <ExperienceCard education={item} key={idx}/>
                        ))}
                    </VerticalTimeline>
                    <EarthCanvas/>
                </Wrapper>
            </Container>
        </>
    )
}
export default Experience