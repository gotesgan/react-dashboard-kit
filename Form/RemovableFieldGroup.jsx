export const RemovableFieldGroup = ({ 
  data, 
  onChange, 
  onRemove, 
  index,
  titlePlaceholder = "Enter title",
  descriptionPlaceholder = "Enter description" 
}) => (
  <div key={index} className="mt-4 p-4 border rounded-md bg-gray-50 relative">
    <button
      type="button"
      onClick={onRemove}
      className="absolute -top-3 -right-3 bg-white rounded-full border-2 text-red-600 hover:text-red-800 focus:outline-none"
    >
      <X className="h-6 w-6" />
    </button>
    <input
      type="text"
      value={data.title}
      onChange={onChange("title")}
      placeholder={titlePlaceholder}
      className="mb-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-base p-2.5 placeholder-gray-400"
    />
    <textarea
      value={data.description}
      onChange={onChange("description")}
      placeholder={descriptionPlaceholder}
      className="mt-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-base p-2.5 placeholder-gray-400"
      rows={3}
    />
  </div>
);