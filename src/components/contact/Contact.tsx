import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef, useCallback, type FormEvent } from "react";
import toast from "react-hot-toast";

const Container = styled.div`display:flex;flex-direction:column;justify-content:center;align-items:center;`;
const Wrapper = styled.div`max-width:1100px;width:100%;display:flex;align-items:center; flex-direction:column;gap:12px;`;
const Title = styled.div`font-size:52px;font-weight:600;text-align:center;margin-top:20px;color:${({ theme })=>theme.text_primary};@media(max-width:768px){font-size:32px;margin-top:12px;}`;
const Desc = styled.div`font-size:18px;font-weight:600;text-align:center;color:${({ theme })=>theme.text_secondary};margin-bottom:48px;@media(max-width:768px){font-size:16px;margin-top:12px;}`;
const ContactForm = styled.form`
  width:59%;
  max-width:600px;
  display:flex;
  flex-direction:column;
  background-color: rgba(17,25,40,0.83);
  border:1px solid rgba(255,255,255,0.125);
  padding:32px;
  border-radius:12px;
  box-shadow: rgba(23,92,230,0.1) 0px 4px 24px;
  gap:12px;
  margin-top:28px;
  margin-left:auto;
  margin-right:auto;
  @media(max-width:768px){ width:90%; padding:16px; }
`;
const ContactTitle = styled.div`font-size:28px;margin-bottom:6px;font-weight:600;color:${({ theme })=>theme.text_secondary};`;
const ContactInput = styled.input`
  flex:1;
  background-color:transparent;
  border:1px solid rgba(255,255,255,0.3);
  outline:none;
  color:${({ theme })=>theme.text_primary};
  border-radius:12px;
  padding:12px 16px;
  &:focus{ border:1px solid ${({ theme })=>theme.primary}; }
  @media(max-width:768px){ font-size:14px; padding:8px 12px; }
`;
const ContactInputMessage = styled.textarea`
  flex:1;
  background-color:transparent;
  border:1px solid rgba(255,255,255,0.3);
  outline:none;
  font-size:18px;
  color:${({ theme })=>theme.text_primary};
  border-radius:12px;
  padding:12px 16px;
  &:focus{ border:1px solid ${({ theme })=>theme.primary}; }
  @media(max-width:768px){ font-size:14px; padding:8px 12px; }
`;
const ContactButton = styled.input`
  width:100%;
  background:hsl(271,100%,50%);
  padding:13px 16px;
  border:none;
  color:${({ theme })=>theme.text_primary};
  font-size:18px;
  font-weight:600;
  border-radius:8px;
  cursor:pointer;
  transition:all 0.3s ease;
  &:hover{ opacity:0.9; }
  @media(max-width:768px){ font-size:16px; padding:10px 12px; }
`;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      "service_wzsbtid",
      "template_3ivbv2j",
      form.current,
      "6urSmNfRN8Rhtj0fC"
    ).then(
      () => {
        toast.success("Message Sent Successfully");
        form.current!.reset();
      },
      (err) => toast.error("Error ❌ " + err.text)
    );
  }, []);

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me</ContactTitle>
          <ContactInput type="text" name="form_name" placeholder="Your Name" required autoComplete="off"/>
          <ContactInput type="email" name="form_email" placeholder="Your Email" required autoComplete="off"/>
          <ContactInput type="text" name="subject" placeholder="Subject" required autoComplete="off"/>
          <ContactInputMessage name="message" placeholder="Message" rows={4} required />
          <ContactButton type="submit" value="Send"/>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
