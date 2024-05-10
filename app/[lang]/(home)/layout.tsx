import { Footer } from "@components/footer";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function HomeLayout({ children }: Props) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}

      <Footer />
    </section>
  );
}
