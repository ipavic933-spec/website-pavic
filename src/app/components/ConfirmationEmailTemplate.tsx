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
  Column,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps {
  name: string;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://website-pavic.vercel.app";

const LOGO_SRC = `${BASE_URL.replace(/\/$/, "")}/logo.png`;
const emailTailwindConfig = {
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#244C63",
        },
      },
    },
  },
};

export const ConfirmationEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ name }) => (
  <Html>
    <Tailwind config={emailTailwindConfig}>
      <Heading as="h1">
        Zaprimili smo vaš upit / We&apos;ve received your message
      </Heading>
      <Section>
        <Container className="mx-auto max-w-xl">
          <Section className="mb-4">
            <Row className="bg-brand-900 p-2 flex">
              <Column className="align-middle pr-4">
                <Img
                  src={LOGO_SRC}
                  alt="IP logo"
                  width={52}
                  height={42}
                  className="h-10.5 w-auto"
                />
              </Column>
              <Column>
                <Text className="m-0! text-[13px] uppercase tracking-[0.15em] text-white/70">
                  Odvjetnički ured
                </Text>
                <Text className="m-0! text-[21px] font-semibold leading-tight tracking-tight text-white">
                  Ivan Pavic
                </Text>
              </Column>
            </Row>
          </Section>
          <Text className="m-0! mt-2">Poštovani/Poštovana {name},</Text>
          <Text className="m-0! mb-2">
            zahvaljujemo Vam na upitu. Potvrđujemo primitak Vaše poruke te ćemo
            Vam odgovoriti u najkraćem mogućem roku, a najkasnije u roku od dva
            radna dana.
          </Text>
          <Hr className="border-dotted" />
          <Text className="m-0! mt-2">Dear {name},</Text>
          <Text className="m-0! mb-2">
            Thank you for your inquiry. We confirm receipt of your message and
            will respond as soon as possible, no later than within two business
            days.
          </Text>
        </Container>
      </Section>
    </Tailwind>
  </Html>
);

export default ConfirmationEmailTemplate;
