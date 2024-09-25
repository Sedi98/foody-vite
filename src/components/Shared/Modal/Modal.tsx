import React from "react";

// Define the prop types
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md text-center shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold  mb-4">Are you sure it's deleted?</h2>
        <p className="text-md mb-6 w-3/4 mx-auto">
          Attention! If you delete this product, it will not come back...
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className=" border-2 border-gray-400 text-gray-400 px-3 py-2 rounded-md "
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
