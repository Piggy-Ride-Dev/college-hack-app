"use client";
import "../styles/globals.scss";
import TanstackProvider from "../providers/TanstackProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <div>{children}</div>
        </TanstackProvider>
      </body>
    </html>
  );
}
