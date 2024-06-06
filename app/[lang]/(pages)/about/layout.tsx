import { Container } from "@mantine/core";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function AboutLayout({ children }: Props) {
  return <Container>{children}</Container>;
}
