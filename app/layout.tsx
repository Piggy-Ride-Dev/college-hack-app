"use client";
import "../styles/globals.scss";
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div>{children}</div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}