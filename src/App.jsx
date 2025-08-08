import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (<Router>
    <div>App</div>
    <Routes>
      {/* <Route path="/" element={< />} /> */}
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>);
};

export default App;
