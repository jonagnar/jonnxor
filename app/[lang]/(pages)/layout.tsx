import { Layout } from "@components/layout";
import { Footer } from "@components/footer";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function PageLayout({ children }: Props) {
  return (
    <Layout>
      {children}
      <Footer />
    </Layout>
  );
}
