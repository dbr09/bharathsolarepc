import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Bharath Solar EPC",
  description: "Design, build and maintain high-performance solar plants across Telangana and India.",
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>{children}</body>
    </html>
  );
}
