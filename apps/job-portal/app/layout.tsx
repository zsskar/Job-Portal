import type { Metadata } from "next";
import './globals.css';


export const metadata: Metadata = {
  title: "Dream Job Portal",
  description: "if you want your deam job, come here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
