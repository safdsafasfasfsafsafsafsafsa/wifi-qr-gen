import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WiFi QR Generator",
  description: "WiFi QR 코드 생성기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
