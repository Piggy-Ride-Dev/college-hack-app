"use client";
import "../styles/globals.scss";
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { Footer, Header } from "antd/es/layout/layout";
import logo from "../src/logo.svg";
import Image from 'next/image';
import styles from "./styles.module.scss";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <QueryClientProvider client={queryClient}>
          <Header className={styles.header}>
            <Image src={logo} alt="Logo" />
          </Header>
          <div className={styles.main}>{children}</div>
          <Footer className={styles.footer}>
            <span>College Hack ©2024 Created by Piggy</span>
          </Footer>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}