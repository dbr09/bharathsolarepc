import "./globals.css";

export const metadata = {
  title: "Empowering India with clean solar energy",
  description: "Design, build and maintain high-performance solar plants across Telangana and India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="fixed inset-0 -z-20 bg-[#020617]" aria-hidden />
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="aurora-layer" />
            <div className="aurora-layer" data-variant="emerald" />
            <div className="aurora-grid" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
