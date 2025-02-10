import Footer from "./components/footer";
import Home from "./components/Home";
import HomeBlog from "./components/HomeBlog";
import HomeProjek from "./components/HomeProjek";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Home />
      <SocialMedia />
      <HomeProjek />
      <HomeBlog />
      <Footer />
    </div>
  );
}

export default App;
