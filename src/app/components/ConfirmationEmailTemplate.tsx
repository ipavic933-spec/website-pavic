import * as React from "react";
import {
  Text,
  Section,
  Hr,
  Heading,
  Img,
  Html,
  Container,
  Row,
  Column
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://website-pavic.vercel.app";

const LOGO_SRC = `${BASE_URL.replace(/\/$/, "")}/logo.png`;

export const ConfirmationEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ name }) => (
  <Html>
    <Heading as="h1">Hvala vam na javljanju</Heading>
    <Section>
      <Container className="max-w-xl m-auto">
        <Section>
          <Row className="flex p-2 bg-brand-900">
            <Column className="align-middle max-w-fit pr-2">
              <Img
                src={LOGO_SRC}
                alt="IP logo"
                width={52}
                height={42}
                className="h-10.5 w-auto"
              />
            </Column>
            <Column className="align-middle">
              <Text className="m-0! text-[13px] uppercase tracking-[0.15em] text-white/70">
                Odvjetnicki ured
              </Text>
              <Text className="m-0! text-[21px] font-semibold leading-tight tracking-tight text-white">
                Ivan Pavic
              </Text>
            </Column>
          </Row>
        </Section>
        <Text className="m-0! mt-2!">
          Postovani/a {name}, zahvaljujemo vam se sto se nam se javili.
        </Text>
        <Text className="m-0! mb-2!">
          Odgovorit cemo vam u najkracem mogucem roku (unutar dva radna dana).
        </Text>
        <Hr className="border-dotted" />
        <Text className="m-0! mt-2!">
          Dear {name}, we thank You for reachng out to us.
        </Text>
        <Text className="m-0! mb-2!">
          We will responde to Your enquiery as soon as posible (within two
          working days).
        </Text>
      </Container>
    </Section>
  </Html>
);

export default ConfirmationEmailTemplate;
