import React from "react";
import { useTranslation } from "react-i18next";

// Define the prop types
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md text-center shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold  mb-4">{t("deleteModalTitle")}</h2>
        <p className="text-md mb-6 w-3/4 mx-auto">
          {t("deleteModalText")}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className=" border-2 border-gray-400 text-gray-400 px-3 py-2 rounded-md "
          >
            {t("deleteModalBtnCancel")}
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            {t("deleteModalBtnDelete")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
