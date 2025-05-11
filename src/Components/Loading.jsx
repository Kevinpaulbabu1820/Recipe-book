import React from 'react';

export default function LoadingIndicator({ message }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
      <p className="ml-4 text-blue-500">{message}</p>
    </div>
  );
}