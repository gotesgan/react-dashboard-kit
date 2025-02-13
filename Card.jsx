import React from "react";

/**
 * A reusable card component for displaying content with an image, title, subtitle, and tags.
 * @param {Object} props - The component props.
 * @param {string} props.image - The URL of the image to display.
 * @param {string} props.title - The title of the card.
 * @param {string} [props.subtitle] - The subtitle of the card (optional).
 * @param {string} [props.content] - The main content of the card (optional).
 * @param {Array<string>} [props.tags] - An array of tags to display (optional).
 * @param {Function} [props.onEdit] - Function to handle edit actions (optional).
 * @param {Function} [props.onDelete] - Function to handle delete actions (optional).
 * @returns {JSX.Element} The Card component.
 */
const Card = ({ image, title, subtitle, content, tags, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full h-[370px] flex flex-col">
      <div className="relative h-48 flex-shrink-0">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full"
        />
        {(onEdit || onDelete) && (
          <div className="absolute top-2 right-2 flex gap-2">
            {onEdit && (
              <button
                onClick={onEdit}
                className="p-1 bg-white rounded-full hover:bg-gray-100 focus:outline-none"
                aria-label={`Edit ${title}`}
              >
                ✏️
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                aria-label={`Delete ${title}`}
              >
                🗑️
              </button>
            )}
          </div>
        )}
      </div>

      <div className="p-4 flex-grow overflow-y-auto">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        {content && <p className="text-sm text-gray-600 line-clamp-5">{content}</p>}

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-gray-200 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;