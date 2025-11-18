"use client"; 

import "./globals.css"; 
export default function GlobalError() {
  
  return (
    <>
      <div className="error-container">
        <h1 className="error-title">Something went wrong!</h1>
        <p className="error-message">Please try again later.</p>
        <button
          className="error-button"
          onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
    </>
  );
}
