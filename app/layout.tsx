import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "./globals.css";
import NavBar from "./NavBar";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/*<Theme>*/}
        <Theme appearance="light" accentColor="violet">
          <NavBar />
          <main className={"p-5"}>{children}</main>
          {/*<ThemePanel />*/}
        </Theme>
      </body>
    </html>
  );
}
