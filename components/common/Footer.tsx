import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-0 p-5 bg-white w-full flex justify-center">
      <div className="w-[1200px] max-w-[90%] flex items-center justify-between text-sm font-medium">
        <p>© {new Date().getFullYear()} Prism Foundation</p>
        <p className="flex items-center">
          <a href="abaqas.in">abaqas.in</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
