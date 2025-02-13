import React, { useEffect } from "react";

/**
 * A utility component for fetching data from an API endpoint and updating state.
 * @param {Object} props - The component props.
 * @param {string} props.url - The API endpoint to fetch data from.
 * @param {Function} props.setter - The function to update state with the fetched data.
 * @param {boolean} [props.requiresData=false] - Whether the response contains a `data` field to extract.
 * @returns {null} This component does not render anything.
 */
export const DataFetcher = ({ url, setter, requiresData = false }) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setter(requiresData ? result.data || [] : result || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setter([]); // Ensure state is always set
      }
    }

    fetchData();
  }, [url, setter, requiresData]);

  return null; // This component doesn't need to render anything
};