import * as React from "react";
import { Text, Section } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string,
  message: string,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
    <Section>
      <Text>
        <h1>A new messafe from a client</h1>
        <div>
          {name} has filled out the form and would like to scedule a meeting
          <br/>
          To contact the user use the email: {email}
          <br/>
          Message of the form:
          <br/>
          {message}
        </div>
      </Text>
    </Section>
);

export default EmailTemplate;