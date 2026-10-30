
import { MessageCircle, X, ChevronDown, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "./ui/use-toast";

const NOTIFICATION_INTERVAL = 25 * 60 * 1000; // 25 minutes in milliseconds

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const ChatBot = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const faqQuestions = [
    { id: 1, question: "What services does ITH offer?", url: "https://t.me/ithsupport" },
    { id: 2, question: "How do I join the affiliate program?", url: "https://t.me/ithsupport" },
    { id: 3, question: "Where are you located?", url: "https://t.me/ithsupport" },
    { id: 4, question: "Do you offer web development?", url: "https://t.me/ithsupport" },
    { id: 5, question: "How can I request a quote?", url: "https://t.me/ithsupport" },
  ];

  useEffect(() => {
    const showNotification = () => {
      const audio = new Audio('/notification.mp3');
      audio.play().catch(console.error);
      
      toast({
        title: "Need Help?",
        description: "Our support team is ready to assist you! Click to chat.",
        duration: 5000,
        action: <Button onClick={() => setIsOpen(true)}>Open Chat</Button>
      });
    };

    const intervalId = setInterval(showNotification, NOTIFICATION_INTERVAL);
    return () => clearInterval(intervalId);
  }, [toast]);

  const handleQuestionClick = (url: string) => {
    window.open(url, "_blank");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Create and inject the Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/680a7a67edfb2119056ff1d7/1ipkes9i0';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // The chat widget will be automatically injected by the Tawk.to script
  return null;
};

export default ChatBot;
