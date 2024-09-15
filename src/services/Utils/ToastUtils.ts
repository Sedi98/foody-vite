import { toast } from 'react-toastify';

const defaultToastConfig = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
};

// Success Toast
export const showSuccessToast = (message: string, options: any = {}) => {
  toast.success(message, { ...defaultToastConfig, ...options });
};

// Error Toast
export const showErrorToast = (message: string, options: any = {}) => {
  toast.error(message, { ...defaultToastConfig, ...options });
};
