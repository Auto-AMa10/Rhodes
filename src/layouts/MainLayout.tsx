import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
