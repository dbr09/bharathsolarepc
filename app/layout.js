import "./globals.css";

export const metadata = {
  title: "Bharath Solar EPC",
  description: "Design, build and maintain high-performance solar plants across Telangana and India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
