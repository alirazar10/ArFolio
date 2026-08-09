import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components";

const sansFont =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const monoFont =
  "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";

const colors = {
  bg: "#F3F3F2",
  card: "#FFFFFF",
  border: "#E5E5E4",
  headerBg: "#0B0C0F",
  ink: "#0B0C0F",
  muted: "#6E7071",
  accent: "#E8A33D",
  accentInk: "#33220A",
  messageBg: "#F6F6F5",
};

export interface ContactNotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactNotificationEmail({
  name,
  email,
  message,
}: ContactNotificationEmailProps) {
  const preview =
    message.length > 100 ? `${message.slice(0, 100)}…` : message;

  return (
    <Html>
      <Head />
      <Preview>{`${name} sent you a message via imali.dev — "${preview}"`}</Preview>
      <Body style={{ backgroundColor: colors.bg, fontFamily: sansFont, margin: 0, padding: "32px 16px" }}>
        <Container
          style={{
            maxWidth: 560,
            backgroundColor: colors.card,
            borderRadius: 12,
            overflow: "hidden",
            border: `1px solid ${colors.border}`,
          }}
        >
          <Section style={{ backgroundColor: colors.headerBg, padding: "28px 32px" }}>
            <Text
              style={{
                margin: 0,
                fontFamily: monoFont,
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: colors.accent,
              }}
            >
              New contact form message
            </Text>
            <Heading
              as="h1"
              style={{
                margin: "8px 0 0",
                fontFamily: sansFont,
                fontSize: 22,
                fontWeight: 700,
                color: "#F6F6F5",
              }}
            >
              Ali Reza<span style={{ color: colors.accent }}>.</span>
            </Heading>
          </Section>

          <Section style={{ padding: "28px 32px 8px" }}>
            <Row>
              <Column>
                <Text style={{ margin: 0, fontSize: 12, fontFamily: monoFont, letterSpacing: 1, textTransform: "uppercase", color: colors.muted }}>
                  From
                </Text>
                <Text style={{ margin: "4px 0 0", fontSize: 16, fontWeight: 600, color: colors.ink }}>
                  {name}
                </Text>
                <Text style={{ margin: "2px 0 0", fontSize: 14 }}>
                  <Link href={`mailto:${email}`} style={{ color: colors.accent, textDecoration: "none" }}>
                    {email}
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={{ padding: "8px 32px 0" }}>
            <Text style={{ margin: "0 0 8px", fontSize: 12, fontFamily: monoFont, letterSpacing: 1, textTransform: "uppercase", color: colors.muted }}>
              Message
            </Text>
            <Section
              style={{
                backgroundColor: colors.messageBg,
                borderRadius: 8,
                padding: "16px 18px",
              }}
            >
              <Text style={{ margin: 0, fontSize: 14, lineHeight: "22px", color: colors.ink, whiteSpace: "pre-wrap" }}>
                {message}
              </Text>
            </Section>
          </Section>

          <Section style={{ padding: "24px 32px 32px" }}>
            <Button
              href={`mailto:${email}?subject=${encodeURIComponent(`Re: your message to Ali Reza`)}`}
              style={{
                backgroundColor: colors.accent,
                color: colors.accentInk,
                fontFamily: monoFont,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "12px 24px",
                borderRadius: 6,
                display: "inline-block",
              }}
            >
              Reply to {name}
            </Button>
          </Section>

          <Hr style={{ borderColor: colors.border, margin: 0 }} />

          <Section style={{ padding: "18px 32px" }}>
            <Text style={{ margin: 0, fontSize: 11, color: colors.muted }}>
              Sent from the contact form at{" "}
              <Link href="https://www.imali.dev" style={{ color: colors.muted }}>
                imali.dev
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function contactNotificationText({
  name,
  email,
  message,
}: ContactNotificationEmailProps): string {
  return `New contact form message from ${name} <${email}>\n\n${message}\n\n— Sent from the contact form at imali.dev`;
}

export default ContactNotificationEmail;
