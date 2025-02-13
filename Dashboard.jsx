import { useState } from "react";
import Navbar from "./ DashboardNavbar";
import Sidebar from "./DashboardSidebar";
import { HomeIcon, Package, BookOpen, Star, UserPlus } from "lucide-react";

/**
 * The main Dashboard component that includes a sidebar and navbar.
 * @returns {JSX.Element} The Dashboard component.
 */
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    console.log("Logged out"); // Placeholder for logout functionality
  };

  const sidebarItems = [
    { title: "Home", Icon: HomeIcon },
    { title: "Package", Icon: Package },
    { title: "Blog", Icon: BookOpen },
    { title: "Review", Icon: Star },
    { title: "Contact", Icon: UserPlus },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} items={sidebarItems} />
      <div className="flex-1 flex flex-col">
        <Navbar
          logo={"/placeholder-logo.png"} // Placeholder logo
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          onLogout={handleLogout}
        />
        <main className="p-4">
          {/* Placeholder for main dashboard content */}
          <p>Welcome to the Dashboard!</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;