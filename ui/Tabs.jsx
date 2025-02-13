import { useState } from "react";

/**
 * A reusable tabs component for displaying dynamic content with optional icons.
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.content - An array of objects representing each tab.
 * @param {string} props.content[].title - The title of the tab.
 * @param {JSX.Element} props.content[].content - The content to display when the tab is active.
 * @param {JSX.Element} [props.content[].icon] - (Optional) The icon to display next to the tab title.
 * @returns {JSX.Element} The Tabs component.
 */
const Tabs = ({ content }) => {
  const [activeContent, setActiveContent] = useState(content[0].title);

  /**
   * Retrieves the content of the active tab.
   * @param {string} title - The title of the active tab.
   * @returns {JSX.Element|null} The content of the active tab or `null` if not found.
   */
  function getContent(title) {
    const item = content.find((item) => item.title === title);
    return item ? item.content : null;
  }

  return (
    <div className="flex flex-col h-full">
      {/* Tab Headers */}
      <div className="flex bg-gray-100 pt-2 h-15">
        {content.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveContent(item.title)}
            className={`
              flex items-center gap-3 px-8 py-4 text-sm font-medium  
              ${activeContent === item.title
                ? "bg-white text-blue-600 border-t-2 border-blue-600 rounded-t-xl w-45"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 w-45"
              }
            `}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
        <div className="flex-grow border-gray-300"></div>
      </div>

      {/* Tab Content */}
      <div className="flex-grow bg-white p-4">
        {getContent(activeContent)}
      </div>
    </div>
  );
};

export default Tabs;