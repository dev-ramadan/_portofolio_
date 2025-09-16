import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';
interface IProps {
    education : {
        name:string,
        img:string,
        date:string,
        degree:string,
        desc:string
    }
}
const Top = styled.div`
    width:100%;
    display:flex;
    max-width:100%;
    gap:12px;
`

const Body = styled.div`
    width:100%;
    display:flex;
     flex-direction: column;  
`;

const Image = styled.img`
    height:50px;
    border-radius:10px;
    margin-top:4px;
    @media only screen and (max-width:768px){
    height:40px;
    }
`;
const Name = styled.div`
    font-size:14px;
    font-weight:500;   
    color:${({theme})=>theme.text_secondary + 99};
    @media only screen and (max-width:768px){
    font-size:12px
    }
`
const Degree = styled.div`
    font-size:18px;
    font-weight:600;
    color:${({theme})=>theme.text_primary + 99};
    @media only screen and (max-width:768px){
    font-size:14px
    }
`
const Date = styled.div`
    font-size:12px;
    font-weight:400;  
    color:${({theme})=>theme.text_secondary + 80};
    @media only screen and (max-width:768px){
    font-size:10px
    }
`;

const Description = styled.div`
    width:100%;
    font-size:15px;
    font-weight:400; 
    color:${({theme})=>theme.text_primary + 99};
    margin-bottom:10px;
    @media only screen and (max-width:768px){
    font-size:12px
    }
`;
const Span = styled.span`
   display:-webkit-box;
   max-width:100%
`
const ExperienceCard = ({education} : IProps) => {

  return (
    <VerticalTimelineElement
     icon={
         <img
         width="100%"
         height="100%"
         alt={education?.name} 
         style={{borderRadius:"50%" , objectFit:"cover"}}
         src={education?.img}
        />
     }

    contentStyle={{
        display:"flex",
        flexDirection:"column",
        gap:"12px",
        background:"#1d1836",
        color:"#fff",
        boxShadow:"rgba(32,92,230,0.15) 0px 4px 24px",
        backgroundColor:"rgba(37,25,40,0.83)",
        border:"1px solid rgba(255,255,2255,0.125)",
        borderRadius:"6px",
    }}

    contentArrowStyle={{
        borderRight:"7px solid rgba(255,255,2255,0.3)",
    }}
    date={education.date}
    >
        <Top>
            <Image src={education.img} alt={education.name}/>
            <Body>
                <Degree>{education.degree}</Degree>
                <Name>{education.name}</Name>
                <Date>{education.date}</Date>
            </Body>
        </Top>
            <Description> {education?.desc && <Span>{education.desc}</Span>}</Description>
        
    </VerticalTimelineElement>
  )
}
export default ExperienceCard