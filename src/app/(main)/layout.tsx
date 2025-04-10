import React from "react";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en" suppressHydrationWarning>
        <Navbar />
        {children}
        </div>
    );
}