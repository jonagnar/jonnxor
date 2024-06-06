import { Layout } from "@components/layout";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function PageLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}
