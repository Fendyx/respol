import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from "lucide-react";
import './Toast.css';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  
  // Автоматическое закрытие через 5 секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast-container toast-${type}`}>
      {type === 'success' ? (
        <CheckCircle className="toast-icon" />
      ) : (
        <AlertCircle className="toast-icon" />
      )}
      
      <div className="toast-content">
        <h4 className="toast-title">
          {type === 'success' ? 'Success' : 'Error'}
        </h4>
        <p className="toast-msg">{message}</p>
      </div>

      <button onClick={onClose} className="toast-close">
        <X size={18} />
      </button>
    </div>
  );
};