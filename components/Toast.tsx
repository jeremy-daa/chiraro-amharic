import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info', isVisible, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getThemeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-brand-lime text-black border-black';
      case 'error':
        return 'bg-brand-pink text-white border-black';
      case 'info':
      default:
        return 'bg-white text-black border-black';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 shrink-0" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 shrink-0" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 shrink-0" />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed top-6 left-0 right-0 z-[200] flex justify-center px-4 pointer-events-none"
        >
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-[1.5rem] border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto max-w-md w-full ${getThemeStyles()}`}
          >
            {getIcon()}
            <p className="flex-1 font-bold text-sm md:text-base">{message}</p>
            <button
              onClick={onClose}
              className="p-1 rounded-full border border-black/20 hover:bg-black/10 transition-colors shrink-0"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
