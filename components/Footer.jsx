import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <div>
      <footer className="bg-bg2 flex justify-center items-center rounded-xl h-10 p-8">
        <h1 className="text-xs sm:text-center">
          Copyright © {year.getFullYear()} Juan Martinez. All rights reserved.
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
