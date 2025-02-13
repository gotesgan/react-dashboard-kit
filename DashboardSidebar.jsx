import React, { useState, useEffect } from "react";

/**
 * A reusable sidebar component with mobile responsiveness.
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Controls whether the sidebar is expanded or collapsed.
 * @param {Array<Object>} props.items - An array of objects representing sidebar items.
 * @param {string} props.items[].title - The title of the sidebar item.
 * @param {React.ReactNode} props.items[].Icon - The icon to display next to the title.
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = ({ isOpen, items }) => {
  const [activeItem, setActiveItem] = useState(items[0].title);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex w-full ${isMobile ? "flex-col" : "h-[calc(100vh-5rem)]"}`}>
      {!isMobile && (
        <div className={`sidebar bg-gray-100 ${isOpen ? "w-64" : "w-20"} h-full flex flex-col shadow-md pt-4 space-y-3 transition-all duration-300`}>
          {items.map(({ title, Icon }, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(title)}
              className={`flex items-center ${
                isOpen ? "justify-start space-x-3" : "justify-center"
              } w-full py-2 px-6 text-left transition-colors duration-200 ease-in-out rounded-r-full text-md 
                ${activeItem === title ? "bg-blue-300 text-white" : "text-gray-700 hover:bg-blue-100"}`}
            >
              <Icon className="w-6 h-6" />
              {isOpen && <span className="font-medium">{title}</span>}
            </button>
          ))}
        </div>
      )}

      <div className={`content flex-1 overflow-y-auto bg-white ${isMobile ? "pb-16" : ""}`}>
        {/* Placeholder for dynamic content */}
        <h1 className="text-2xl font-semibold p-4">{activeItem}</h1>
      </div>

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 shadow-md">
          <div className="flex justify-around items-center h-16 px-1">
            {items.map(({ title, Icon }, index) => (
              <button
                key={index}
                onClick={() => setActiveItem(title)}
                className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ease-in-out ${
                  activeItem === title ? "bg-blue-300 text-white" : "text-gray-700"
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;