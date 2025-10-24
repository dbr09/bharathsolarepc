import "./globals.css";

export const metadata = {
  title: "Empowering india with claen solar energy",
  description: "Design, build and maintain high-performance solar plants across Telangana and India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
