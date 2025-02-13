import { useEffect, useRef } from "react";

/**
 * A reusable modal component with customizable width, title, and content.
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines whether the modal is visible.
 * @param {Function} props.onClose - A callback function triggered when the modal is closed.
 * @param {string} props.title - The title displayed in the modal header.
 * @param {JSX.Element} props.children - The content to display inside the modal.
 * @param {string} [props.ariaLabelClose="Close modal"] - The accessible label for the close button. Default is "Close modal".
 * @param {string} [props.maxWidth="sm"] - The maximum width of the modal. Default is "sm".
 * @returns {JSX.Element|null} The Modal component or `null` if not open.
 */
const Modal = ({ isOpen, onClose, title, children, ariaLabelClose = "Close modal", maxWidth = "sm" }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "visible";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div
        ref={modalRef}
        className={`bg-white rounded-lg shadow-xl w-full max-w-${maxWidth} max-h-[90vh] overflow-y-auto`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between px-6 py-3">
          <h2 id="modal-title" className="text-2xl font-semibold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label={ariaLabelClose}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;