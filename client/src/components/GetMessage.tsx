import { useState, useEffect } from "react";
import FlashMessage from "./FlashMessage";

const GetMessage = () => {
  const [messages, setMessages] = useState<{
    error?: string;
    success?: string;
  }>({});

  useEffect(() => {
    // Simulating fetching messages
    const fetchMessages = async () => {
      // Example API call to get messages
      const res = await fetch("/api/flash-messages");
      const data = await res.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <FlashMessage message={messages} />
      {/* Other component content */}
    </div>
  );
};

export default GetMessage;
