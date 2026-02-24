import * as React from "react";
import { Text, Section, Heading, Container, Hr } from "@react-email/components";

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
    <Container>
      <Heading as="h1">Novi upit s web stranice</Heading>
      <Text>Zaprimljen je novi upit putem kontakt forme.</Text>
      <Hr />
      <Text>Ime i prezime: {name}</Text>
      <Text>E-mail: {email}</Text>
      <Text>Poruka:</Text>
      <Text>{message}</Text>
      <Hr />
      <Text>
        Ova poruka je automatski poslana s kontakt forme.
      </Text>
    </Container>
  </Section>
);

export default EmailTemplate;
