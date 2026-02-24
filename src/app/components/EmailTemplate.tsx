import * as React from "react";
import { Text, Section, Heading } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <Section>
    <Text>
      <Heading as="h1">A new messafe from a client</Heading>
      <div>
        <Text>{name} has filled out the form and would like to scedule a meeting</Text>
        <Text>To contact the user use the email: {email}</Text>
        <Text>Message of the form:</Text>
        {message}
      </div>
    </Text>
  </Section>
);

export default EmailTemplate;
