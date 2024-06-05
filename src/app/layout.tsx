import { montserrat } from "./fontes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
