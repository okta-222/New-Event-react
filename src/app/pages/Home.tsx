import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Overview from "./Overview/Overview";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Overview />
    </div>
  );
}
