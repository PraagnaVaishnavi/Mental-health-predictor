import React, { useState } from "react";
import {
  Brain,
  Briefcase,
  Users,
  Shield,
  AlertCircle,
  CheckCircle,
  Building,
  Heart,
} from "lucide-react";
import Result from "./Result.jsx";
const WorkplaceMentalHealthPredictor = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    self_employed: "",
    family_history: "",
    treatment: "",
    work_interfere: "",
    no_employees: "",
    remote_work: "",
    tech_company: "",
    benefits: "",
    care_options: "",
    wellness_program: "",
    seek_help: "",
    anonymity: "",
    leave: "",
    mental_health_consequence: "",
    phys_health_consequence: "",
    coworkers: "",
    supervisor: "",
    mental_health_interview: "",
    phys_health_interview: "",
    mental_vs_physical: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  if (showResults) {
    return <Result res={prediction} />;
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const sanitizeValue = (value) => {
    return value
      .toString()
      .replace(/\s+/g, "_")
      .replace(/[^\w]/g, "")
      .toLowerCase();
  };
  const handleSubmit = async () => {
    const requiredFields = Object.keys(formData);
    const isEmpty = requiredFields.some((field) => !formData[field]);
    if (isEmpty) {
      alert("Please answer all questions to get an accurate prediction");
      return;
    }
    const sanitizedPayload = {};
    for (const key in formData) {
      sanitizedPayload[key] = sanitizeValue(formData[key]);
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://mental-health-predictor-api.onrender.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizedPayload),
        }
      );
      if (!response.ok)
        throw new Error("Failed to get prediction from backend");
      const result = await response.json();
      setPrediction(result.prediction); // ✅ Save result
      setShowResults(true); // ✅ Trigger conditional rendering
    } catch (error) {
      console.error("Prediction error:", error);
      alert("An error occurred while predicting. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const resetForm = () => {
    setFormData({
      Age: "",
      Gender: "",
      self_employed: "",
      family_history: "",
      treatment: "",
      work_interfere: "",
      no_employees: "",
      remote_work: "",
      tech_company: "",
      benefits: "",
      care_options: "",
      wellness_program: "",
      seek_help: "",
      anonymity: "",
      leave: "",
      mental_health_consequence: "",
      phys_health_consequence: "",
      coworkers: "",
      supervisor: "",
      mental_health_interview: "",
      phys_health_interview: "",
      mental_vs_physical: "",
    });
    setPrediction(null);
    setShowResults(false);
    setCurrentStep(0);
  };
  const questions = [
    {
      key: "Age",
      label: "Age",
      type: "number",
    },
    {
      key: "Gender",
      label: "Gender",
      options: ["male", "female", "other"],
    },
    {
      key: "self_employed",
      label: "Are you self-employed?",
      options: ["Yes", "No"],
    },
    {
      key: "family_history",
      label: "Do you have a family history of mental illness?",
      options: ["Yes", "No"],
    },
    {
      key: "treatment",
      label: "Have you sought treatment for a mental health condition?",
      options: ["Yes", "No"],
    },
    {
      key: "work_interfere",
      label: "Does your mental health interfere with work?",
      options: ["Often", "Sometimes", "Rarely", "Never"],
    },
    {
      key: "no_employees",
      label: "How many employees does your company have?",
      options: [
        "1-5",
        "6-25",
        "26-100",
        "100-500",
        "500-1000",
        "More than 1000",
      ],
    },
    {
      key: "remote_work",
      label: "Do you work remotely?",
      options: ["Yes", "No"],
    },
    {
      key: "tech_company",
      label: "Is your employer a tech company?",
      options: ["Yes", "No"],
    },
    {
      key: "benefits",
      label: "Does your employer provide mental health benefits?",
      options: ["Yes", "No", "Don't know"],
    },
    {
      key: "care_options",
      label: "Do you know the mental health care options provided?",
      options: ["Yes", "No", "Not sure"],
    },
    {
      key: "wellness_program",
      label: "Has your employer discussed mental health in a wellness program?",
      options: ["Yes", "No", "Don't know"],
    },
    {
      key: "seek_help",
      label:
        "Does your employer provide resources to learn more about mental health?",
      options: ["Yes", "No", "Don't know"],
    },
    {
      key: "anonymity",
      label:
        "Is your anonymity protected when seeking mental health treatment?",
      options: ["Yes", "No", "Don't know"],
    },
    {
      key: "leave",
      label:
        "How easy is it for you to take medical leave for a mental health condition?",
      options: [
        "Very easy",
        "Somewhat easy",
        "Difficult",
        "Very difficult",
        "Don't know",
      ],
    },
    {
      key: "mental_health_consequence",
      label:
        "Do you think discussing a mental health issue with your employer would have negative consequences?",
      options: ["Yes", "No", "Maybe"],
    },
    {
      key: "phys_health_consequence",
      label:
        "Do you think discussing a physical health issue with your employer would have negative consequences?",
      options: ["Yes", "No", "Maybe"],
    },
    {
      key: "coworkers",
      label: "Would you discuss mental health with coworkers?",
      options: ["Yes", "No", "Some of them"],
    },
    {
      key: "supervisor",
      label: "Would you discuss mental health with your supervisor?",
      options: ["Yes", "No", "Some of them"],
    },
    {
      key: "mental_health_interview",
      label: "Would you bring up a mental health issue in a job interview?",
      options: ["Yes", "No", "Maybe"],
    },
    {
      key: "phys_health_interview",
      label: "Would you bring up a physical health issue in a job interview?",
      options: ["Yes", "No", "Maybe"],
    },
    {
      key: "mental_vs_physical",
      label:
        "Do you feel your employer takes mental health as seriously as physical health?",
      options: ["Yes", "No", "Don't know"],
    },
  ];
  if (showResults) {
    // your existing results screen remains unchanged here
  }
  const current = questions[currentStep];
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-green-600 p-4 rounded-full shadow-lg">
              <Briefcase className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Workplace Mental Health Predictor
          </h1>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Answer each question to assess your mental health risk at the
            workplace.
          </p>
        </div>
        {/* Step-based Question UI */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-green-200">
          <label className="block text-green-700 font-medium mb-4">
            {current.label}
          </label>
          {current.type === "number" ? (
            <input
              type="number"
              name={current.key}
              value={formData[current.key]}
              onChange={handleInputChange}
              className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter value"
            />
          ) : (
            <select
              name={current.key}
              value={formData[current.key]}
              onChange={handleInputChange}
              className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select option</option>
              {current.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 0 ? (
              <button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="bg-green-100 hover:bg-green-200 text-green-800 font-bold py-3 px-6 rounded-lg border border-green-300"
              >
                Previous
              </button>
            ) : (
              <div />
            )}
            {currentStep < questions.length - 1 ? (
              <button
                onClick={() => {
                  if (!formData[current.key]) {
                    alert("Please answer this question before continuing.");
                  } else {
                    setCurrentStep((s) => s + 1);
                  }
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkplaceMentalHealthPredictor;
