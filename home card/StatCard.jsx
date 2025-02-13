import React from "react";

/**
 * A reusable component for displaying a statistic card.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the statistic.
 * @param {number|string} props.count - The value or count to display.
 * @param {React.ReactNode} props.icon - The icon to display alongside the statistic.
 * @param {string} props.bg - The background color or class for the card.
 * @param {Function} props.onClick - Function to handle click events on the card.
 * @param {string} props.redirectUrl - The URL to redirect to when the card is clicked (optional).
 * @returns {JSX.Element} The StatCard component.
 */
export const StatCard = ({ title, count, icon, bg, onClick, redirectUrl }) => (
  <div
    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center"
    onClick={() => {
      onClick(title); // Trigger the passed onClick function
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    }}
  >
    <div className="flex items-center space-x-3">
      <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-500">{title}</h3>
    </div>
    {redirectUrl ? null : (
      <p className="text-3xl font-bold text-gray-800">{count}</p>
    )}
  </div>
);