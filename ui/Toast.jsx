import { useState, useEffect } from "react";

/**
 * A reusable toast notification component.
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to display in the toast.
 * @param {number} [props.duration=3000] - The duration (in milliseconds) for which the toast is visible. Default is 3000ms.
 * @param {Function} props.onClose - A callback function triggered when the toast disappears.
 * @param {string} [props.position="bottom-4 right-4"] - The position of the toast on the screen. Default is bottom-right.
 * @param {string} [props.backgroundColor="bg-green-500"] - The background color of the toast. Default is green.
 * @returns {JSX.Element|null} The Toast component or `null` if not visible.
 */
export const Toast = ({ message, duration = 3000, onClose, position = "bottom-4 right-4", backgroundColor = "bg-green-500" }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed ${position} ${backgroundColor} text-white px-4 py-2 rounded shadow-lg`}
    >
      {message}
    </div>
  );
};