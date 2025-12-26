// frontend/src/components/ConfirmationModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'default' | 'danger' | 'info';
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'ยืนยัน',
  cancelLabel = 'ยกเลิก',
  variant = 'default'
}: ConfirmationModalProps) {
  
  const colors = {
    default: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', icon: 'text-blue-600', iconBg: 'bg-blue-100' },
    danger: { bg: 'bg-red-600', hover: 'hover:bg-red-700', icon: 'text-red-600', iconBg: 'bg-red-100' },
    info: { bg: 'bg-indigo-600', hover: 'hover:bg-indigo-700', icon: 'text-indigo-600', iconBg: 'bg-indigo-100' }
  }[variant];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 pb-0 flex justify-between items-start">
                <div className={`w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0 mb-4`}>
                  <AlertCircle size={24} className={colors.icon} />
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {message}
                </p>
              </div>

              {/* Footer / Buttons */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  {cancelLabel}
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className={`px-6 py-2.5 rounded-xl font-bold text-white shadow-lg shadow-blue-500/20 transition-all active:scale-95 ${colors.bg} ${colors.hover}`}
                >
                  {confirmLabel}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}