import Navbar from "../components/layout/Navbar"
import ScrollProgress from "../components/layout/ScrollProgress";
import Footer from "../components/layout/Footer"

export default function MainLayout({ children }) {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="overflow-x-hidden bg-[#09090B] text-white">
        {children}
      </main>

      <Footer />

    </>
  );
}