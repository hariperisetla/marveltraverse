import Header from "./Header";
import Footer from "./Footer";

import React from "react";

const index = ({ children }) => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-800">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default index;
