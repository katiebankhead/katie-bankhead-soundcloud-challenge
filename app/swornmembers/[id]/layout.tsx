import { Button, Container, Link } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link href="/">
        <Button type="button">Back to Houses</Button>
      </Link>
      <Container maxWidth="lg">{children}</Container>
    </>
  );
}
