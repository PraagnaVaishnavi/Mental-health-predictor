import React from "react";
function Result({ res }) {
  console.log(res);
  if (res === "yes") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-transparent leading-tight mb-4">
              You likely have a mental health disorder
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Taking this step to understand your mental health is important.
              Here are some practical next steps you can take.
            </p>
          </div>
          {/* Action Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Here's what you can do:
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Step 1 */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                      Consider seeking professional health support
                    </h4>
                    <p className="text-emerald-700 text-sm">
                      Connect with a mental health professional who can provide
                      proper assessment and treatment options.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🧑</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-800 mb-2">
                      Discuss workplace accommodations with HR
                    </h4>
                    <p className="text-teal-700 text-sm">
                      Explore what workplace adjustments might help you manage
                      your responsibilities effectively.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-green-800 mb-2">
                      Utilise employee assistance programs if available
                    </h4>
                    <p className="text-green-700 text-sm">
                      Many employers offer confidential counseling and support
                      services at no cost to employees.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                      Build a support network among trusted colleagues
                    </h4>
                    <p className="text-emerald-700 text-sm">
                      Having understanding colleagues can provide valuable
                      emotional support and practical assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Message */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
              <p className="text-emerald-800 font-medium">
                Remember: Seeking help is a sign of strength, not weakness. You
                don't have to navigate this alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-transparent leading-tight mb-4">
              You are mentally fit! You are good to go!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Although you are well today, here are some tips to stay that way!
            </p>
          </div>
          {/* Action Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Here's what you can do :
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Step 1 */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                      Consider meditating every day
                    </h4>
                    <p className="text-emerald-700 text-sm">
                      Scientific studies show that meditating every day
                      significantly decreases the likelihood of being affected
                      by mental health issues.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🧑</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-800 mb-2">
                      Talk about your feelings with somebody you can trust
                    </h4>
                    <p className="text-teal-700 text-sm">
                      Keeping feelings bundled is one of the most common factors
                      that causes mental health issues.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-green-800 mb-2">
                      Provide support to anybody who needs it
                    </h4>
                    <p className="text-green-700 text-sm">
                      Many people might be going through a tough time. Take
                      responsibility and help them out
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-emerald-800 mb-2">
                      Build a support network among trusted colleagues
                    </h4>
                    <p className="text-emerald-700 text-sm">
                      Having understanding colleagues can provide valuable
                      emotional support and practical assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Message */}
        </div>
      </div>
    );
  }
}
export default Result;
