// app/layout.js
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Bharath Solar EPC",
  description: "Dodlapati Bharath Reddy — Solar EPC in Hyderabad, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Sidebar />
        {/* Reserve space for sidebar on md+ screens */}
        <div className="md:ml-64 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
