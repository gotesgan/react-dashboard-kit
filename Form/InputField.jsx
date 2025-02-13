import React from "react";

/**
 * A reusable text input component.
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the input field.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.onChange - Function to handle changes in the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {boolean} props.required - Whether the input field is required.
 * @param {Function} props.onKeyDown - Function to handle keydown events.
 * @returns {JSX.Element} The InputField component.
 */
export const InputField = ({ id, name, value, onChange, placeholder, required, onKeyDown }) => (
  <div>
    <label htmlFor={id} className="block text-base font-medium text-gray-700 mb-1">
      {placeholder}
    </label>
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      required={required}
      placeholder={placeholder}
      className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-base p-2.5 placeholder-gray-400"
    />
  </div>
);