import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "My Projects",
  description: "An overview of my projects to manage their maintenance.",
  authors: [{ name: "João Palmeiro" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-screen-sm selection:bg-gray-900 selection:text-gray-50">
        {children}
      </body>
    </html>
  );
}
