// src/components/ui/toaster.jsx
import { Toaster } from "react-hot-toast";

export function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        className: "text-sm font-medium",
        success: {
          style: { background: "#10b981", color: "#fff" },
        },
        error: {
          style: { background: "#ef4444", color: "#fff" },
        },
      }}
    />
  );
}
