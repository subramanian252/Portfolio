import { Sora } from "@next/font/google";
import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const Layout = ({ children }) => {
  return (
    <div
      className={`${sora.variable} font-sora page bg-site bg-cover bg-no-repeat text-white relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
