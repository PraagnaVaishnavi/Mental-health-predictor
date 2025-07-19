import "../src/index.css";
import { AlertCircle } from "lucide-react";

function ImageResult({ emotion }) {
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <div className="w-full max-w-3xl bg-gradient-to-br from-green-50 to-white shadow-lg rounded-3xl p-8 border border-green-200">
        <div className="flex items-center mb-5">
          <div className="bg-green-100 p-3 rounded-full mr-4 shadow-sm">
            <AlertCircle className="w-7 h-7 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-800">
            Your facial expression insights:
          </h2>
        </div>

        <ul className="list-disc pl-8 text-green-700 space-y-2 text-lg leading-relaxed">
          {emotion.map((text, idx) => (
            <li key={idx}>📌 {text}</li>
          ))}
        </ul>
      </div>

      <footer className="text-sm text-gray-600 mt-4 italic max-w-3xl text-center px-4">
        ⚠️ <span className="font-medium">Disclaimer:</span> These results are AI-based and may not reflect your actual mental state. Please consult a certified mental health professional for accurate diagnosis or guidance.
      </footer>
    </div>
  );
}

export default ImageResult;
