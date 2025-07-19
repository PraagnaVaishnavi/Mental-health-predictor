import { Brain, Camera, FileText, Activity } from "lucide-react";
import { motion } from "framer-motion";

const ProjectInsight = ({ onStart }) => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-4xl bg-white p-10 rounded-3xl shadow-xl border border-green-200">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-6">
          🤖 Mental Health Predictor - How It Works
        </h1>

        <p className="text-green-700 text-lg text-center mb-8 leading-relaxed">
          This AI-powered tool helps identify if an employee might be experiencing mental health issues.
          It collects responses to workplace mental health questions and also analyzes facial expressions via webcam.  
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="flex items-start space-x-4">
            <FileText className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-800">
                20+ Key Questions
              </h3>
              <p className="text-green-600">
                You’ll be asked a series of carefully curated questions to assess workplace mental health risk.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Camera className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-800">
                Facial Expression Analysis
              </h3>
              <p className="text-green-600">
                With your permission, the app captures webcam images randomly and analyzes emotions using AI.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Brain className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-800">
                AI Prediction
              </h3>
              <p className="text-green-600">
                Based on your answers and expressions, the model predicts whether professional help is needed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Activity className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-800">
                Secure & Private
              </h3>
              <p className="text-green-600">
                Your data is handled securely and never stored permanently. You’re in control throughout.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 italic mb-8">
          This is not a replacement for a clinical diagnosis. Consult a professional for medical advice.
        </p>

        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition"
          >
            Start Assessment
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectInsight;
