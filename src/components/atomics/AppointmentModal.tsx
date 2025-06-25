// components/AppointmentModal.tsx
import React from "react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Book Appointment
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="datetime-local"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded w-full hover:bg-sky-700"
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 block mx-auto text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentModal;
