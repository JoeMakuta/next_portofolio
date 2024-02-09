import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

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
      <Head>
        <link
          rel="shortcut icon"
          href="/asserts/profil_pic.png"
          type="image/x-icon"
        />
      </Head>
      <body className="overflow-x-hidden  ">{children}</body>
    </html>
  );
}
