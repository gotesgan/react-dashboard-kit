import React from "react";
import { LogOut, Menu } from "lucide-react";

/**
 * A reusable navbar component for the dashboard.
 * @param {Object} props - The component props.
 * @param {string} props.logo - The URL of the logo to display.
 * @param {boolean} props.isSidebarOpen - Controls the open/close state of the sidebar.
 * @param {Function} props.setIsSidebarOpen - Function to toggle the sidebar visibility.
 * @param {Function} props.onLogout - Function to handle logout actions.
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar = ({ logo, isSidebarOpen, setIsSidebarOpen, onLogout }) => {
  return (
    <div className="navbar flex items-center justify-between border-b-4 border-cyan-200 p-4 h-[80px]">
      <div className="flex items-center space-x-4">
        <Menu
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          size={50}
          className={`hidden sm:inline-block shadow-xl rounded-lg text-dark hover:text-white hover:bg-blue-200 h-9 w-9 hover:border-2 ml-0.5 
          ${isSidebarOpen ? "bg-black-300" : "bg-black-200"}`}
        />
        <img src={logo || "/placeholder-logo.png"} alt="Company Logo" className="h-[60px]" />
      </div>

      <div className="flex items-center space-x-3">
        <LogOut
          onClick={onLogout}
          size={50}
          className="shadow-xl bg-blue-200 rounded text-dark hover:text-white hover:bg-gray-600 p-2 h-12 w-12"
        />
      </div>
    </div>
  );
};

export default Navbar;