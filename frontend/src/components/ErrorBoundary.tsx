// frontend/src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
          <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
            <AlertTriangle size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-800 mb-2">Oops! Something went wrong.</h1>
          <p className="text-slate-500 mb-8 max-w-md">
             ขออภัย เกิดข้อผิดพลาดบางอย่างขึ้น โปรดลองรีเฟรชหน้าจออีกครั้ง
             <br/>
             <span className="text-xs text-slate-400 mt-2 block font-mono bg-slate-100 p-2 rounded">
                {this.state.error?.message}
             </span>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-colors shadow-lg"
          >
            <RefreshCcw size={20} /> Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;