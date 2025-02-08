import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Mouseover from "@components/mouseover";
import Footer from "@components/Footer";

export const metadata = {
  title: "Portfolio Page",
  description: "Camilo's Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <Mouseover />
        <Navbar />
        <main className="mt-16 sm:mt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
