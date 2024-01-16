import Books from "../components/Books";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-10 lg:my-14">
        <Header></Header>
        <Books></Books>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
