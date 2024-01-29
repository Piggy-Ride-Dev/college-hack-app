import type { Metadata } from "next";
import "./globals.scss";
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: "Piggy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.example}>{children}</body>
    </html>
  );
}
