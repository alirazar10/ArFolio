import BackToTop from "../libs/backToTop";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className="w-full min-h-screen " data-name="wrapper">
      <Navbar />
      <main className="min-h-0 bg-primary-500 h-full px-5 pt-16">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
