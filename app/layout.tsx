import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "@/src/presentation/context/AuthContext";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "BL Hackathon",
  description: "Black Leaders Hackathon Platform",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
