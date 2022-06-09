import { Fragment } from "react";
import Footer from "./component/Header/Footer";
import Header from "./component/Header/Header";
import Home from "./container/Home/Home";


function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
