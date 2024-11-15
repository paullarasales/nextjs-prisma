'use client';
import { useState } from "react";

export default function ProtectedRoute({ children }) {
  const [enteredPin, setEnteredPin] = useState("");
  const [isPinCorrect, setIsPinCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const correctPin = process.env.NEXT_PUBLIC_PIN || "1234";

  const handlePinSubmit = (e) => {
    e.preventDefault();

    if (enteredPin === correctPin) {
      setIsPinCorrect(true);
    } else {
      setErrorMessage("Oops! That’s not it, love. Try again 💕");
    }
  };

  return (
    <div>
      {!isPinCorrect ? (
        <div className="flex justify-center items-center min-h-screen bg-pink-100">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-4 text-center text-pink-600">
              Welcome, my love! 💖
            </h2>
            <p className="text-center text-gray-600 mb-4">
              This is your safe place to express your feelings, your thoughts, 
              and everything in between. It's just for you. 🌸
            </p>
            {errorMessage && (
                <p className="text-red-500 text-center mt-2">
                    Oops! That&rsquo;s not it, love. Try again 💕
                </p>
            )}
            <form onSubmit={handlePinSubmit}>
              <input
                type="password"
                value={enteredPin}
                onChange={(e) => setEnteredPin(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-center"
                placeholder="Enter your magic PIN ✨"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-200"
              >
                Unlock 💕
              </button>
            </form>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
