import "../src/index.css";
import { AlertCircle } from "lucide-react";
function ImageResult({ emotion }) {
  return (
    <div>
      <div className="img-answer bg-white shadow-md rounded-2xl p-6 mt-6 border border-green-200">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <AlertCircle className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-green-800">
            What each image of your facial expressions say:
          </h2>
        </div>
        <ul className="list-disc pl-6 text-green-700 space-y-2">
          {emotion.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
      <footer class="res-foot">
        Disclaimer: These results may not be 100% accurate. Please consider
        talking to a mental health professional before drawing conclusions.
      </footer>
    </div>
  );
}

export default ImageResult;
