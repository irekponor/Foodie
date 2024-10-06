import React from "react";

// Define the type for flash messages
interface FlashMessageProps {
  message: {
    error?: string;
    success?: string;
  };
}

const FlashMessage: React.FC<FlashMessageProps> = ({ message }) => {
  return (
    <>
      {message.error && (
        <div className="alert alert-danger">
          <strong>{message.error}</strong>
        </div>
      )}
      {message.success && (
        <div className="alert alert-success">
          <strong>{message.success}</strong>
        </div>
      )}
    </>
  );
};

export default FlashMessage;
