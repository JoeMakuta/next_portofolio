import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josué Makuta | Portfolio",
  description: "Designed and developed by Josue Makuta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-x-hidden  ">{children}</body>
    </html>
  );
}
