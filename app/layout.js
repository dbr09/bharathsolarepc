import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Bharath Solar EPC",
  description: "Solar EPC solutions in Telangana — Residential, Commercial & Industrial.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Sidebar />
        <div className="md:ml-64 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

