import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const SpheresWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for joining the Spheres waitlist, {userFirstname}! 🚀</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={"spheres.png"}
          width="120"
          height="120"
          alt="Spheres Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for Spheres – Your AI-Powered Networking Assistant! I&#39;m excited to have you on board.
        </Text>
        <Text style={paragraph}>
          Most students and young professionals struggle with what comes <i>after</i> the first connection. That&#39;s why we&#39;re building Spheres to help you build, grow, and maintain meaningful relationships – without the guesswork.
        </Text>
        <Text style={paragraph}>
          With Spheres, you&#39;ll be able to:
        </Text>
        <Text style={{...paragraph, paddingLeft: '20px'}}>
          ✅ Know exactly who to reach out to<br />
          ✅ Get AI-generated follow-up messages<br />
          ✅ Stay on track with smart reminders<br />
          ✅ Align networking with your career goals
        </Text>
        <Text style={paragraph}>
          I&#39;ll keep you updated on our progress and let you know as soon as Spheres is ready for you to try. You&#39;ll be among the first to experience this powerful networking tool!
        </Text>
        <Text style={paragraph}>
          If you have any questions or thoughts about networking challenges you&#39;d like Spheres to address, feel free to reply directly to{" "}
          <a href="mailto:contact@spheres.ai" style={link}>
            this email
          </a>.
        </Text>
        <Text style={signOff}>
          Looking forward to supercharging your network,
          <br />
          The Spheres Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Spheres waitlist.
          If you believe this is a mistake, you can ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

SpheresWaitlistEmail.PreviewProps = {
  userFirstname: "Nick",
} as EmailProps;

export default SpheresWaitlistEmail;

const main = {
  background: "#ffffff",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#333333",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "20px",
  lineHeight: "28px",
  fontWeight: "600",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#00664E",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "rgba(255, 255, 255, 0.2)",
  margin: "20px 0",
};

const footer = {
  color: "#777",
  fontSize: "12px",
};