import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Initializing Portfolio...";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-6 text-gray-100">
      <div className="mb-4 text-center font-mono text-2xl font-bold sm:text-4xl">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </div>

      <div className="relative h-[2px] w-full max-w-[600px] overflow-hidden rounded bg-gray-800">
        <div className="h-full w-[40%] animate-loading-bar bg-gradient-to-r from-blue-500 to-purple-800 shadow-[0_0_15px_#8c3bf6]" />
      </div>
    </div>
  );
};