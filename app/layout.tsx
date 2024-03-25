import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "College Hack",
  description: "App created by Piggy Ride",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FDC044",
            colorText: "#474747",
            borderRadius: 2,
          },
          components: {
            Button: {
              defaultColor: "#474747",
              algorithm: true,
            },
            Collapse: {
              fontWeightStrong: 600,
            },
          },
        }}
      >
        <html lang="en">
          <body className={inter.className}>
            <AntdRegistry>
              <HeaderComponent />
              {children}
              <FooterComponent />
            </AntdRegistry>
          </body>
        </html>
      </ConfigProvider>
    </ReactQueryClientProvider>
  );
}
