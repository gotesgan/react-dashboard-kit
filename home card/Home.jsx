import React from "react";
import { DataFetcher } from "./DataFetcher";
import { StatCard } from "./StatCard";

/**
 * The Home component displays an overview of statistics using StatCard components.
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.stats - An array of statistic objects to display.
 * @param {Function} props.setActiveContent - Function to handle click events on StatCards.
 * @returns {JSX.Element} The Home component.
 */
export default function Home({ stats, setActiveContent }) {
  return (
    <div className="min-h-screen bg-gray-50 p-2 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Overview</h1>

      {/* Fetch data dynamically */}
      {stats.map(stat =>
        stat.url ? <DataFetcher key={stat.title} url={stat.url} setter={stat.setter} requiresData={stat.requiresData} /> : null
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            count={stat.count}
            icon={stat.icon}
            bg={stat.bg}
            onClick={stat.redirectUrl ? null : setActiveContent}
            redirectUrl={stat.redirectUrl}
          />
        ))}
      </div>
    </div>
  );
}