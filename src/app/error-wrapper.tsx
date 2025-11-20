"use client";
import "./globals.css";
import { useState } from "react";

interface ErrorWrapperProps {
  children: React.ReactNode;
}

interface ErrorSimulatorProps {
  message?: string;
}

const ErrorSimulator = ({ message = "An error has occurred!" }: ErrorSimulatorProps) => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(message); 
  }

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export default function ErrorWrapper({ children }: ErrorWrapperProps) {
  return (
    <>
      <ErrorSimulator />
      {children}
    </>
  );
}
