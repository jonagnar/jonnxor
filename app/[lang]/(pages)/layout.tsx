import { App } from "@components/app";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function PageLayout({ children }: Props) {
  return <App>{children}</App>;
}
