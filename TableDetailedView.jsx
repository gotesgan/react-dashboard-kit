import { useState, useEffect } from "react";
import { RefreshCcw, ArrowLeft, Trash2, X } from "lucide-react";

/**
 * @typedef {Object} Column
 * @property {string} key - The key to access the data in each row
 * @property {string} header - The header text to display
 * @property {(value: any) => string|JSX.Element} [render] - Optional custom render function
 * @property {boolean} [sortable] - Whether the column is sortable
 */

/**
 * @typedef {Object} DetailField
 * @property {string} key - The key to access the data
 * @property {string} label - The label to display
 * @property {(value: any) => string|JSX.Element} [render] - Optional custom render function
 */

/**
 * @typedef {Object} TableDetailViewProps
 * @property {string} title - The title of the table view
 * @property {string} detailTitle - The title of the detail view
 * @property {Column[]} columns - Column definitions for the table
 * @property {DetailField[]} detailFields - Fields to display in the detail view
 * @property {string} apiUrl - Base API URL for data operations
 * @property {boolean} [enableDelete=true] - Whether to enable delete functionality
 * @property {boolean} [enableRefresh=true] - Whether to enable refresh functionality
 * @property {(data: any) => void} [onDataChange] - Callback when data changes
 * @property {(error: Error) => void} [onError] - Callback for error handling
 * @property {Object} [customHeaders] - Custom headers for API requests
 * @property {React.ReactNode} [actionButtons] - Additional action buttons
 * @property {string} [emptyMessage="No data found"] - Message to show when there's no data
 * @property {string} [loadingMessage="Loading..."] - Message to show while loading
 */

/**
 * A reusable component for displaying data in both table and detail views
 * @param {TableDetailViewProps} props - The component props
 */
const TableDetailView = ({
  title,
  detailTitle,
  columns,
  detailFields,
  apiUrl,
  enableDelete = true,
  enableRefresh = true,
  onDataChange,
  onError,
  customHeaders = {},
  actionButtons,
  emptyMessage = "No data found",
  loadingMessage = "Loading..."
}) => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          ...customHeaders
        }
      });
      const fetchedData = await response.json();
      setData(fetchedData);
      onDataChange?.(fetchedData);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [apiUrl]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const deleteItem = async () => {
    if (!itemToDelete) return;

    try {
      const response = await fetch(`${apiUrl}/${itemToDelete}`, {
        method: "DELETE",
        headers: customHeaders
      });

      if (response.ok) {
        const newData = data.filter((item) => item.id !== itemToDelete);
        setData(newData);
        onDataChange?.(newData);
        if (selectedRow?.id === itemToDelete) {
          setSelectedRow(null);
        }
      } else {
        throw new Error("Failed to delete item");
      }
    } catch (error) {
      console.error("Delete error:", error);
      onError?.(error);
    } finally {
      setIsDeleteConfirmationOpen(false);
      setItemToDelete(null);
    }
  };

  const TableView = () => (
    <div>
      <div className="p-3 flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex gap-2">
          {actionButtons}
          {enableRefresh && (
            <button
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={getData}
              aria-label="Refresh data"
            >
              <RefreshCcw className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="bg-white border-gray-200 overflow-hidden">
        {loading ? (
          <div className="text-center py-10 text-gray-500">{loadingMessage}</div>
        ) : data.length === 0 ? (
          <div className="text-center py-10 text-gray-500">{emptyMessage}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-none min-w-[1000px]">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="px-4 py-3 text-left text-lg font-semibold text-gray-700"
                      onClick={() => column.sortable && handleSort(column.key)}
                      style={{ cursor: column.sortable ? 'pointer' : 'default' }}
                    >
                      {column.header}
                      {column.sortable && sortConfig.key === column.key && (
                        <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                      )}
                    </th>
                  ))}
                  {enableDelete && <th className="px-4 py-3 text-lg font-semibold text-gray-700">Actions</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 cursor-pointer text-lg"
                    onClick={() => setSelectedRow(item)}
                  >
                    {columns.map((column) => (
                      <td key={column.key} className="px-4 py-3 text-gray-600">
                        {column.render ? column.render(item[column.key]) : item[column.key]}
                      </td>
                    ))}
                    {enableDelete && (
                      <td className="px-4 py-3 text-gray-600">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            setItemToDelete(item.id);
                            setIsDeleteConfirmationOpen(true);
                          }}
                          aria-label="Delete item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

  const DetailView = () => (
    <div className="bg-white rounded-lg shadow border border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b border-gray-200 bg-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setSelectedRow(null)}
            aria-label="Back to list"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="text-2xl font-semibold">{detailTitle}</h2>
        </div>
        {enableDelete && (
          <button
            className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
            onClick={() => {
              setItemToDelete(selectedRow.id);
              setIsDeleteConfirmationOpen(true);
            }}
            aria-label="Delete item"
          >
            <Trash2 className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="p-7 flex flex-col space-y-6">
        {detailFields.map((field) => (
          <div key={field.key} className="space-y-1">
            <span className="block text-sm font-medium text-gray-900">{field.label}</span>
            <p className="text-gray-800 break-words">
              {field.render
                ? field.render(selectedRow[field.key])
                : selectedRow[field.key] || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-screen overflow-hidden">
      {!selectedRow ? <TableView /> : <DetailView />}

      <DeleteConfirmation
        isOpen={isDeleteConfirmationOpen}
        onClose={() => {
          setIsDeleteConfirmationOpen(false);
          setItemToDelete(null);
        }}
        onConfirm={deleteItem}
      />
    </div>
  );
};

export default TableDetailView;