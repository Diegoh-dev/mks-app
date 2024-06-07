import { montserrat } from "./fontes";
import ReactQueryProvider from "src/libs/providers/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <ReactQueryProvider>
        
        <body
          style={{
            position: "relative",
          }}
        >
          {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}
