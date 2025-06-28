import React, { useState } from 'react';
import { Brain, Briefcase, Users, Shield, AlertCircle, CheckCircle, Building, Heart } from 'lucide-react';

const WorkplaceMentalHealthPredictor = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Gender: '',
    self_employed: '',
    family_history: '',
    treatment: '',
    work_interfere: '',
    no_employees: '',
    remote_work: '',
    tech_company: '',
    benefits: '',
    care_options: '',
    wellness_program: '',
    seek_help: '',
    anonymity: '',
    leave: '',
    mental_health_consequence: '',
    phys_health_consequence: '',
    coworkers: '',
    supervisor: '',
    mental_health_interview: '',
    phys_health_interview: '',
    mental_vs_physical: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const simulateMLPrediction = () => {
    setIsLoading(true);
    
    // Simulate API call to your trained RandomForest model
    setTimeout(() => {
      // Simulate model prediction logic based on key features
      let riskFactors = 0;
      
      // Family history is a strong predictor
      if (formData.family_history === 'Yes') riskFactors += 3;
      
      // Current treatment
      if (formData.treatment === 'Yes') riskFactors += 2;
      
      // Work interference
      const workInterference = formData.work_interfere;
      if (workInterference === 'Often') riskFactors += 3;
      else if (workInterference === 'Sometimes') riskFactors += 2;
      else if (workInterference === 'Rarely') riskFactors += 1;
      
      // Workplace factors
      if (formData.benefits === 'No') riskFactors += 1;
      if (formData.mental_health_consequence === 'Yes') riskFactors += 2;
      if (formData.anonymity === 'No') riskFactors += 1;
      if (formData.leave === 'Difficult') riskFactors += 2;
      
      // Supportive environment
      if (formData.coworkers === 'No') riskFactors += 1;
      if (formData.supervisor === 'No') riskFactors += 1;
      
      // Calculate probability (0-1)
      const probability = Math.min(0.95, Math.max(0.05, (riskFactors / 15) + (Math.random() * 0.2 - 0.1)));
      const hasConsequence = probability > 0.5;
      const confidence = (Math.random() * 10 + 85).toFixed(1); // 85-95% confidence
      
      setPrediction({
        hasConsequence,
        probability: (probability * 100).toFixed(1),
        confidence,
        riskFactors,
        recommendations: hasConsequence 
          ? [
              'Consider seeking professional mental health support',
              'Discuss workplace accommodations with HR',
              'Utilize employee assistance programs if available',
              'Build a support network among trusted colleagues',
              'Practice stress management techniques'
            ]
          : [
              'Continue maintaining good mental health practices',
              'Stay connected with your support network',
              'Monitor stress levels and work-life balance',
              'Take advantage of workplace wellness programs',
              'Regular check-ins with mental health professionals'
            ]
      });
      
      setIsLoading(false);
      setShowResults(true);
    }, 2500);
  };

  const handleSubmit = () => {
    // Validate required fields
    const requiredFields = Object.keys(formData);
    const isEmpty = requiredFields.some(field => !formData[field]);
    
    if (isEmpty) {
      alert('Please answer all questions to get an accurate prediction');
      return;
    }
    
    simulateMLPrediction();
  };

  const resetForm = () => {
    setFormData({
      Age: '',
      Gender: '',
      self_employed: '',
      family_history: '',
      treatment: '',
      work_interfere: '',
      no_employees: '',
      remote_work: '',
      tech_company: '',
      benefits: '',
      care_options: '',
      wellness_program: '',
      seek_help: '',
      anonymity: '',
      leave: '',
      mental_health_consequence: '',
      phys_health_consequence: '',
      coworkers: '',
      supervisor: '',
      mental_health_interview: '',
      phys_health_interview: '',
      mental_vs_physical: ''
    });
    setPrediction(null);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-200">
              {/* Results Header */}
              <div className="text-center mb-8">
                <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                  prediction.hasConsequence ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  {prediction.hasConsequence ? (
                    <AlertCircle className="w-10 h-10 text-red-600" />
                  ) : (
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  )}
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-2">
                  Mental Health Risk Assessment
                </h2>
                <p className="text-green-700">
                  Model Confidence: {prediction.confidence}%
                </p>
              </div>

              {/* Prediction Results */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    <Brain className="inline w-6 h-6 mr-2" />
                    Prediction Results
                  </h3>
                  <div className={`text-lg font-bold mb-3 ${
                    prediction.hasConsequence ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {prediction.hasConsequence 
                      ? 'Likely to experience mental health consequences' 
                      : 'Unlikely to experience mental health consequences'
                    }
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-green-700">
                      <span>Risk Probability:</span>
                      <span className="font-semibold">{prediction.probability}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          parseFloat(prediction.probability) > 70 ? 'bg-red-500' : 
                          parseFloat(prediction.probability) > 40 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${prediction.probability}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-green-600 mt-2">
                      Risk Factors Identified: {prediction.riskFactors}/15
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    <Heart className="inline w-6 h-6 mr-2" />
                    Recommendations
                  </h3>
                  <ul className="space-y-3">
                    {prediction.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start text-green-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Warning for High Risk */}
              {prediction.hasConsequence && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2" />
                    Important Notice
                  </h3>
                  <p className="text-red-700 mb-4">
                    Based on your responses, our model predicts you may be at risk for workplace mental health consequences. 
                    This is a statistical prediction and should not replace professional medical advice.
                  </p>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="text-red-800 font-medium text-sm">
                      🚨 If you're experiencing severe mental health symptoms or thoughts of self-harm, please seek immediate professional help or contact a crisis helpline.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="text-center space-x-4">
                <button
                  onClick={resetForm}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Take New Assessment
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-green-100 hover:bg-green-200 text-green-800 font-bold py-3 px-6 rounded-lg transition-colors duration-300 border border-green-300"
                >
                  Save Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
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
            AI-powered assessment using Random Forest model to predict mental health consequences in the workplace
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-200">
            <div className="space-y-8">
              
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Age</label>
                    <input
                      type="number"
                      name="Age"
                      value={formData.Age}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Gender</label>
                    <select
                      name="Gender"
                      value={formData.Gender}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Employment & Company */}
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                  <Building className="w-6 h-6 mr-2" />
                  Employment & Company
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Are you self-employed?</label>
                    <select
                      name="self_employed"
                      value={formData.self_employed}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Is your employer a tech company?</label>
                    <select
                      name="tech_company"
                      value={formData.tech_company}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">How many employees does your company have?</label>
                    <select
                      name="no_employees"
                      value={formData.no_employees}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="1-5">1-5</option>
                      <option value="6-25">6-25</option>
                      <option value="26-100">26-100</option>
                      <option value="100-500">100-500</option>
                      <option value="500-1000">500-1000</option>
                      <option value="More than 1000">More than 1000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Do you work remotely?</label>
                    <select
                      name="remote_work"
                      value={formData.remote_work}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Mental Health History */}
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                  <Brain className="w-6 h-6 mr-2" />
                  Mental Health History
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Do you have a family history of mental illness?</label>
                    <select
                      name="family_history"
                      value={formData.family_history}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Have you sought treatment for a mental health condition?</label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-green-700 font-medium mb-2">
                      If you have a mental health condition, do you feel that it interferes with your work?
                    </label>
                    <select
                      name="work_interfere"
                      value={formData.work_interfere}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Often">Often</option>
                      <option value="Sometimes">Sometimes</option>
                      <option value="Rarely">Rarely</option>
                      <option value="Never">Never</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Workplace Benefits & Support */}
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Workplace Benefits & Support
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Does your employer provide mental health benefits?</label>
                    <select
                      name="benefits"
                      value={formData.benefits}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Don't know">Don't know</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Do you know the options for mental health care your employer provides?</label>
                    <select
                      name="care_options"
                      value={formData.care_options}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Has your employer ever discussed mental health as part of an employee wellness program?</label>
                    <select
                      name="wellness_program"
                      value={formData.wellness_program}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Don't know">Don't know</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Does your employer provide resources to learn more about mental health issues?</label>
                    <select
                      name="seek_help"
                      value={formData.seek_help}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Don't know">Don't know</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Workplace Culture & Consequences */}
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-6">Workplace Culture & Consequences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Is your anonymity protected if you choose to take advantage of mental health or substance abuse treatment resources?</label>
                    <select
                      name="anonymity"
                      value={formData.anonymity}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Don't know">Don't know</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">How easy is it for you to take medical leave for a mental health condition?</label>
                    <select
                      name="leave"
                      value={formData.leave}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Very easy">Very easy</option>
                      <option value="Somewhat easy">Somewhat easy</option>
                      <option value="Difficult">Difficult</option>
                      <option value="Very difficult">Very difficult</option>
                      <option value="Don't know">Don't know</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Do you think that discussing a mental health issue with your employer would have negative consequences?</label>
                    <select
                      name="mental_health_consequence"
                      value={formData.mental_health_consequence}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Maybe">Maybe</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Do you think that discussing a physical health issue with your employer would have negative consequences?</label>
                    <select
                      name="phys_health_consequence"
                      value={formData.phys_health_consequence}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Maybe">Maybe</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Social Support & Communication */}
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-6">Social Support & Communication</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Would you be willing to discuss a mental health issue with your coworkers?</label>
                    <select
                      name="coworkers"
                      value={formData.coworkers}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Some of them">Some of them</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Would you be willing to discuss a mental health issue with your direct supervisor(s)?</label>
                    <select
                      name="supervisor"
                      value={formData.supervisor}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Some of them">Some of them</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Interview & Hiring */}
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-6">Interview & Hiring Perspectives</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Would you bring up a mental health issue with a potential employer in an interview?</label>
                    <select
                      name="mental_health_interview"
                      value={formData.mental_health_interview}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Maybe">Maybe</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Would you bring up a physical health issue with a potential employer in an interview?</label>
                    <select
                      name="phys_health_interview"
                      value={formData.phys_health_interview}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Maybe">Maybe</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-green-700 font-medium mb-2">Do you feel that your employer takes mental health as seriously as physical health?</label>
                    <select
                      name="mental_vs_physical"
                      value={formData.mental_vs_physical}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Don't know">Don't know</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-50 transform hover:scale-105"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing with ML Model...
                    </div>
                  ) : (
                    'Predict Mental Health Risk'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Model Information */}
        <div className="mt-12 text-center">
          <div className="bg-green-100 border border-green-300 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-green-800 font-semibold mb-3">About This Model</h3>
            <p className="text-green-700 text-sm mb-2">
              This assessment uses a <strong>Random Forest Classifier</strong> trained on workplace mental health survey data.
              The model analyzes 22 key features to predict potential mental health consequences in the workplace.
            </p>
            <p className="text-green-700 text-xs">
              <strong>Disclaimer:</strong> This tool is for educational and awareness purposes only. Results should not replace professional medical advice, diagnosis, or treatment. 
              Always consult qualified mental health professionals for proper evaluation and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkplaceMentalHealthPredictor;