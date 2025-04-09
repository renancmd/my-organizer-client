import type { Metadata } from "next";
import { Inter} from "next/font/google";
import {ThemeProvider} from "next-themes";
import React from "react";

import "@/styles/globals.scss";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "My Organizer",
  description: "To-Do App",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className}`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
