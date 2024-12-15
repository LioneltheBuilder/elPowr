import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "@/src/presentation/context/AuthContext";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "BL Hackathon",
  description: "Not your typical hackathon: Where code, culture, and community come together to shape a new future.",
  icons: {
    icon: "/blhackathon/BLhackathon_Icon_COLOR (2).png",
    shortcut: "/blhackathon/BLhackathon_Icon_COLOR (2).png",
    apple: "/blhackathon/BLhackathon_Icon_COLOR (2).png",
  },
  openGraph: {
    title: "BL Hackathon",
    description: "Not your typical hackathon: Where code, culture, and community come together to shape a new future.",
    images: [
      {
        url: "/blhackathon/BLhackathon_Icon_COLOR (2).png",
        width: 1200,
        height: 630,
        alt: "BL Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BL Hackathon",
    description: "Not your typical hackathon: Where code, culture, and community come together to shape a new future.",
    images: ["/blhackathon/BLhackathon_Icon_COLOR (2).png"],
  },
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
