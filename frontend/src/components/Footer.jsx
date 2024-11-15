import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-300 shadow-md py-4">
      <div className="flex justify-around items-center max-w-6xl mx-auto px-4">
        {/* Copyright Section */}
        <p className="text-sm text-slate-700 font-semibold">
          Copyright &copy; {currentYear} NestQuest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
