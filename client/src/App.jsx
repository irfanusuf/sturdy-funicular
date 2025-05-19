import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const username = "Javeed";
  const panel = "Admin";

  return (
    // jsx fragment
    <>
      <Navbar />

      <div className="main">
        <h2 style={{ textAlign: "center" }}> hello {username} </h2>

        <h3>Welocme to the {panel} panel</h3>
      </div>

      <Footer />
    </>
  );
};

export default App;
