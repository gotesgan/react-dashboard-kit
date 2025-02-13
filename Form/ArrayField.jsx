import React from "react";
import { PlusCircle, X } from "lucide-react";

/**
 * A reusable component for handling arrays of input fields.
 * @param {Object} props - The component props.
 * @param {string} props.fieldName - The name of the field.
 * @param {Array<string>} props.values - The array of values for the input fields.
 * @param {Function} props.onChange - Function to handle changes in the input fields.
 * @param {Function} props.onAdd - Function to add a new input field.
 * @param {Function} props.onRemove - Function to remove an input field.
 * @param {string} props.placeholder - The placeholder text for the input fields.
 * @returns {JSX.Element} The ArrayField component.
 */
export const ArrayField = ({
  fieldName,
  values,
  onChange,
  onAdd,
  onRemove,
  placeholder,
}) => (
  <div>
    <label className="block text-base font-medium text-gray-700 mb-1">{placeholder}</label>
    {values.map((value, index) => (
      <div key={index} className="mt-2 flex items-center">
        <input
          type="text"
          value={value}
          onChange={onChange(index)}
          placeholder={`${placeholder} ${index + 1}`}
          className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-base p-2.5 placeholder-gray-400"
        />
        {index > 0 && (
          <button
            type="button"
            onClick={onRemove(index)}
            className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    ))}
    <button
      type="button"
      onClick={onAdd}
      className="mt-2 inline-flex items-center px-4 py-2 rounded-md border-0 text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
    >
      <PlusCircle className="h-4 w-4 mr-2" /> Add {placeholder}
    </button>
  </div>
);