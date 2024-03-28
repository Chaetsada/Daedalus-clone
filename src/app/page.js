import About from "./components/About";
import Awards from "./components/Awards";
import Blog from "./components/Blog";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Divider/>
      <Services />
      <Divider/>
      <Awards />
      <Divider/>
      <Blog />
      <Footer/>
    </main>
  );
}
