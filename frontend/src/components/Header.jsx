import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-3" />
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div>
        <button className="mr-4">Login</button>
        <button>Logout</button>
      </div>
    </header>
  );
};

export default Header;
