import * as React from "react";
import { Text, Section } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
}

export const ConfirmationEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ name }) => (
  <Section>
    <Text>
      <h1>Thank You reaching out</h1>
      <div>
        Dear {name}, we thank You for reachng out to us.
        <br />
        We will responde to Your enquiery as soon as posible (within two working
        days).
        <br />
      </div>
    </Text>
  </Section>
);

export default ConfirmationEmailTemplate;
