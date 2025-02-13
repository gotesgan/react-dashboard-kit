import React from "react";

/**
 * A reusable file upload component with image preview.
 * @param {Object} props - The component props.
 * @param {File} props.file - The selected file.
 * @param {Function} props.onChange - Function to handle file selection.
 * @param {string} props.preview - The URL for the image preview.
 * @returns {JSX.Element} The FileUpload component.
 */
export const FileUpload = ({ file, onChange, preview }) => (
  <div>
    <label htmlFor="file" className="block text-base font-medium text-gray-700 mb-1">
      Upload Image
    </label>
    <label htmlFor="file" className="sr-only">
      Choose a file
    </label>
    <input
      type="file"
      id="file"
      onChange={onChange}
      accept="image/*"
      className="mt-1 block w-full text-base text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-base file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    />
    {preview && (
      <div className="mt-2">
        <img src={preview || "/placeholder.svg"} alt="Preview" className="w-32 h-32 object-cover rounded-md" />
      </div>
    )}
  </div>
);