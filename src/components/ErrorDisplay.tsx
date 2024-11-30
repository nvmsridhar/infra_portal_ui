import { AlertTriangle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
}

export default function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
      <h1 className="text-xl font-semibold text-gray-900 mb-2">
        Something went wrong
      </h1>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}